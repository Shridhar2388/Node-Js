const express = require('express');

const bcrypt = require('bcryptjs');

const userRouter = express.Router();

const { users } = require('../data');

const User = require('../models/user')

const auth=require('../middleware/auth');
const admin=require('../middleware/admin');

userRouter.route('/:id')
    .get(async(req, res) => {

        const userId = req.params.id;
        console.log(`Parameter passed ${userId}`);
        const userById = users.find(x => x.id === parseInt(userId)); //returns object
        if (!userById) {
            res.status(404);
            res.send("User not found.");
            return;
        }
        res.json(userById);
    })
    .put(async(req, res) => {
        const userId = req.params.id;
        const userById = users.find(x => x.id === parseInt(userId)); //returns object
        if (!userById) {
            res.status(404);
            res.send("User not found.");
            return;
        }
        userById.name = req.body.name;
        res.json(users);
    })
    .delete((req, res) => {

        const userId = req.params.id;

        const userIndex = users.findIndex(x => x.id === parseInt(userId)); //returns object
        if (userIndex < 0) {
            res.status(404);
            res.send("User not found.");
            return;
        }
        users.splice(userIndex, 1);
        res.json(users);
    });

userRouter
    .route('/')
    .get([auth,admin],async (req, res) => {
        //res.json(users);
        try {
            const users = await User.find();
            res.status(200).json(users);
        }
        catch (e) {
            res.status(500).json({ message: 'Something went record. Create user failed.' })
        }
    })
    .post(async (req, res) => {
        // //Data can be passed as JSON or url encoded.
        // console.log(req.body);
        // res.status(201);

        // //Using spread operator
        // // const newUser = { ...req.body, id: Date.now() };
        // // users.push(newUser);
        // //using Mongo to insert data

        try {

            const hashPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashPassword;
            const user = await User.create({ ...req.body });
            res.status(201).send(user);
        } catch (e) {
            res.status(500).json({ message: 'Something went record. Create user failed.', errorMessage: e.message })
            //console.log('Something went record');
        }

    });



module.exports = userRouter;