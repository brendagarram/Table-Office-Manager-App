const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const config = require('../configs/config');
const { key } = config;

module.exports = {
    createToken: async(req, resp, next) => {
        const { email, password } = req.body;
        const emailQuery = req.body.email;
        try {
            if (!password || !email || (!email && !password)) {
                next(400);
            } else {
                await Users.findOne({ email: emailQuery }, (error, res) => {
                    console.log('error', error);
                    console.log(res);
                    if (!res) {
                        next(403);
                    } else {
                        console.log('respuesta', res);
                        console.log(res._id);
                        bcrypt.compare(password, res.password, (err, result) => {
                            console.log('búsqueda de email', result);
                            console.log(res._id, 'para payload')
                            if (!result) {
                                next(401);
                            } else {
                                const payload = { 
                                  id: res._id,
                                  check: true
                                };
                                const token = jwt.sign(
                                    { payload },
                                    key, 
                                    { expiresIn: '24h' }, 
                                );
                                resp.json({
                                    user: res, //
                                    auth: true,
                                    token: token,
                                    message: 'Valid credentials',
                                });
                            }
                        });
                    }
                });
            }
        } catch (err) {
            console.log(err)
            return next(501);
        }
    },
}