const { createReservation, deleteReservation, findReservation, reservationAll, searchByUser,} = require('../controllers/Reservations');
const { requireAuth } = require('../middlewares/auth');

module.exports = (app, nextMain) => {
  app.post('/reservations', requireAuth, createReservation);
  app.delete('/reservations/:id', requireAuth, deleteReservation);
  app.get('/reservation/:number', requireAuth, findReservation);
  app.get('/reservations', requireAuth, reservationAll);
  app.get('/reservations/:user', requireAuth, searchByUser);
  app.get('/reservations_by_date/:date', searchByDay);
  nextMain();
}
