const admin = (req, res, next) => {
    console.log(req.user.isAdmin);
    console.log(req.user);
    if (!req.user.isAdmin) {
        console.log('code is inside if');
        res.status(403).json({ error: 'You are not authorized' });
        return;
    }
    console.log('code is here');
    next();
}

module.exports = admin;