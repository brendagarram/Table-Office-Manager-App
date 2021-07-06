const { createReservation, deleteReservation, findReservation, reservationAll, searchByUser, searchByDay} = require('../controllers/Reservations');
const { requireAuth } = require('../middlewares/auth');

module.exports = (app, nextMain) => {
  app.post('/reservations',  createReservation);
  app.delete('/reservations/:id', requireAuth, deleteReservation);
  app.get('/reservation/:number', requireAuth, findReservation);
  app.get('/reservations', reservationAll);
  app.get('/reservations/:user', requireAuth, searchByUser);
  app.get('/reservations_by_date/:date', searchByDay);
  nextMain();
}
