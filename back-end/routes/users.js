const { updateUser, createUser, deleteUser, findUser, usersAll, userSearcher } = require('../controllers/Users');
const { requireAuth } = require('../middlewares/auth');

module.exports = (app, nextMain) => {
    app.post('/users', createUser);
    app.put('/users/:id', updateUser);
    app.get('/users', requireAuth, usersAll);
    app.delete('/users/:id', deleteUser);
    app.get('/users/:username', findUser);
    app.get('/search/:username', userSearcher);
    app.get('/search/:id', userSearcher);
    nextMain();
}