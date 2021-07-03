const { Router } = require('express');
const Reservations = Router();
const ReservationsController = require('../../controllers/Reservations');

Reservations.get('/reservations', ReservationsController.ReservationAll);

module.exports = Reservations;