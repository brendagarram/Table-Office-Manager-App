module.exports = (app, nextMain) => {
  app.post('/changePassword', updatePassword);
  return nextMain();
};