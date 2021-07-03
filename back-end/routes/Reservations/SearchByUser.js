const { Router } = require('express');
const reservation = Router();
const reservationController = require('../../controllers/Reservations');

reservation.get('/reservations/:user', reservationController.SearchByUser);

module.exports = reservation;