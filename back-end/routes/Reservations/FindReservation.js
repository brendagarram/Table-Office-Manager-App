const { Router } = require('express');
const findReservation = Router();
const findReservationController = require('../../controllers/Reservations');

findReservation.get('/reservation/:number', findReservationController.FindReservation);

module.exports = findReservation;