const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  Users = require('../models/users.js');
const config = require('../configs/config');
const { key } = config;

module.exports = {
  createToken: async (req, resp, next) => {
    console.log(req.body);
    const { email, password, username } = req.body;
    console.log('password del body', password);
    const emailQuery = req.body.email;
    console.log(emailQuery);
    try {
      if (!password || !email || (!email && !password)) {
        next(400);
      } else {
        await Users.findOne({ email: emailQuery }, (error, res) => {
          console.log('error', error);
          if (!res) {
            next(403);
          } else {
              console.log('respuesta', res);
              bcrypt.compare(password, res.password, (err, result) => {
                console.log('búsqueda de email', result);
                if (!result) {
                  next(401);
                } else {
                  const payload = {
                    id : res._id,
                    username: username,
                    check:  true
                  };
                  const token = jwt.sign(
                    { payload },
                    key,
                    { expiresIn: '24h' }, //1 mes
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
