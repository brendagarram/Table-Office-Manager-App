const { Router } = require('express');
const createReservation = Router();
const createReservationController = require('../../controllers/Reservations');

createReservation.post('/reservations', createReservationController.CreateReservation);

module.exports = createReservation;