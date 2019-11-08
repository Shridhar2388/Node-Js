const express = require('express');

const bcrypt = require('bcryptjs');

const authRouter = express.Router();

const jwt = require('jsonwebtoken');

const _ = require('lodash');

const User = require('../models/user');

const { secretKey } = require('../data');


authRouter.post('/', async (req, res) => {
    try {
        const email = req.body.email;

        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            res.status(400).json({ message: 'Wrong email or password.' })
        }
        const result = await bcrypt.compare(req.body.password, user.password);
        if (!result) {
            res.status(400).json({ message: 'Wrong email or password.' })
        }

        const payload = _.pick(user, ['_id', 'name', 'isAdmin']);
        const token = jwt.sign(payload, secretKey);
        
        console.log(token);
        res.json({ message: 'Login successful', token });
    } catch (e) {
        res.status(500).json({ message: 'Something went record. Create product failed.', errorMessage: e.message });
    }
});

module.exports = authRouter;