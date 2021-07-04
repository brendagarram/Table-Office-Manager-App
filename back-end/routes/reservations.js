const { createReservation, deleteReservation, findReservation, reservationAll, searchByUser,} = require('../controllers/Reservations');

module.exports = (app, nextMain) => {
  app.post('/reservations', createReservation);
  app.post('/reservations/:id', deleteReservation);
  app.get('/reservation/:number', findReservation);
  app.get('/reservations', reservationAll);
  app.get('/reservations/:user', searchByUser);
  app.get()
  nextMain();
}
