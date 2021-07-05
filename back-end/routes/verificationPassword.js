
module.exports = (app, nextMain) => {
  app.post('/changePassword', requireAuth, updatePassword);
  return nextMain();
};