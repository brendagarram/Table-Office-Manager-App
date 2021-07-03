const { Router } = require('express');
const deleteReservation = Router();
const deleteReservationController = require('../../controllers/Reservations');

deleteReservation.delete('/reservations/:id', deleteReservationController.DeleteReservation);

module.exports = deleteReservation;