const express = require('express');

const homeRouter = express.Router();

const { users } = require('../data');
homeRouter.route('')
    .get((req, res) => {
        res.send('Hello Welcome to ECom API');
    });

homeRouter.get('/users', (req, res) => {
    res.render('user', { users });
});
module.exports = homeRouter;