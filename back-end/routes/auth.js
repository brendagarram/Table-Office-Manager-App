const { createToken } = require('../controllers/auth');

module.exports = (app, nextMain) => {
  app.post('/auth', createToken);
  return nextMain();
};