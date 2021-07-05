const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

module.exports = (secret) => (req, resp, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return next();
    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            console.log(err)
            next(403);
        }
        //console.log(decodedToken);
        Users.findOne({ _id: decodedToken.payload.id }, (err, user) => {
            if (err) { next(500, err); }
            req.headers.user = user;
            next();
        });
    });
};

module.exports.isAuthenticated = (req) => (
    req.headers.user ? true : false
);

module.exports.requireAuth = (req, resp, next) => (
    (!module.exports.isAuthenticated(req)) ?
    next(401) :
    next()
);