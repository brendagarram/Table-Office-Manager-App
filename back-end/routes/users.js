const {updateUser, createUser, deleteUser, findUser, usersAll, userSearcher } = require('../controllers/users');
const { requireAuth } = require('../middlewares/auth');

module.exports = (app, nextMain) => {
  app.post('/users', createUser);
  app.put('/users/:id', requireAuth, updateUser);
  app.get('/users', requireAuth, usersAll);
  app.delete('/users/:id', requireAuth, deleteUser);
  app.get('/users/:username', requireAuth, findUser);
  app.get('/search/:username', requireAuth, userSearcher);
  app.get('/search/:id', requireAuth, userSearcher);
  nextMain();
}
