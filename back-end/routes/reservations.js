<<<<<<< HEAD
const { createReservation, deleteReservation, findReservation, reservationAll, searchByUser, searchByDay} = require('../controllers/Reservations');

module.exports = (app, nextMain) => {
  app.post('/reservations', createReservation);
  app.del('/reservations/:id', deleteReservation);
  app.get('/reservation/:number', findReservation);
  app.get('/reservations', reservationAll);
  app.get('/reservations/:user', searchByUser);
  app.get('/reservations_by_date/:date', searchByDay);
=======
const { createReservation, deleteReservation, findReservation, reservationAll, searchByUser,} = require('../controllers/Reservations');
const { requireAuth } = require('../middlewares/auth');

module.exports = (app, nextMain) => {
  app.post('/reservations', requireAuth, createReservation);
  app.delete('/reservations/:id', requireAuth, deleteReservation);
  app.get('/reservation/:number', requireAuth, findReservation);
  app.get('/reservations', requireAuth, reservationAll);
  app.get('/reservations/:user', requireAuth, searchByUser);
>>>>>>> 1970c6ecc54995291b1a7a3ec8017df01f08a463
  nextMain();
}
