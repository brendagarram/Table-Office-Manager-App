const auth = require('./Users/Auth');
const createuser = require('./Users/CreateUser');
const users = require('./Users/Users');
const finduser = require('./Users/FindUser');
const deleteuser = require('./Users/DeleteUser');
const alteruser = require('./Users/AlterUser');

const reservations = require('./Reservations/Reservations');
const createreservations = require('./Reservations/CreateReservation');
const deletereservations = require('./Reservations/DeleteReservations');
const searchByUser = require('./Reservations/SearchByUser');


module.exports = [auth, createuser, users, finduser, deleteuser, alteruser, reservations, createreservations, deletereservations, searchByUser];