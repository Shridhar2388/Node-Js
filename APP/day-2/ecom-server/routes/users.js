const express = require('express');

const userRouter = express.Router();

const { users } = require('../data');

userRouter.route('/:id')
    .get((req, res) => {

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
    .put((req, res) => {
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
    .get((req, res) => {
        res.json(users);
    })
    .post((req, res) => {
        //Data can be passed as JSON or url encoded.
        console.log(req.body);
        res.status(201);

        //Using spread operator
        const newUser = { ...req.body, id: Date.now() };
        users.push(newUser);
        res.send(newUser);
    });

    

module.exports = userRouter;