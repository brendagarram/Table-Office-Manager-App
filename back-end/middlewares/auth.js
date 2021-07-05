const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const mongoose = require('mongoose');

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
        console.log(decodedToken);
        const id = decodedToken.id;
        Users.findOne(mongoose.Types.ObjectId(id), (err, user) => {
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