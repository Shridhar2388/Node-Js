const jwt = require('jsonwebtoken');

const { secretKey } = require('../data');


const auth = (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token);
    if (!token) {
        return res.status(401).json({ error: 'invalid token missing' });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        req.user = payload;
        next()
    } catch (e) {
        return res.status(401).json({ error: 'invalid token' });
    }
}

module.exports=auth;