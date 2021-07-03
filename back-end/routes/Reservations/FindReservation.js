const { Router } = require('express');
const findReservation = Router();
const findReservationController = require('../../controllers/Reservations');

findReservation.get('/reservations/:number', findReservationController.FindReservation);

module.exports = findReservation;