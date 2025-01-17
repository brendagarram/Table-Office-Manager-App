const users = require('./users');
const auth = require('./auth');
const reservations = require('./reservations')

const root = (app, next) => {
  const pkg = app.get('pkg');
  app.get('/', (req, res) => res.json({ name: pkg.name, version: pkg.version }));
  return next();
};

// eslint-disable-next-line consistent-return
const register = (app, routes, cb) => {
  if (!routes.length) {
    return cb();
  }

  routes[0](app, (err) => {
    if (err) {
      return cb(err);
    }

    return register(app, routes.slice(1), cb);
  });
};

module.exports = (app, next) => register(app, [
  users,
  auth,
  reservations,
  root,
], next);
