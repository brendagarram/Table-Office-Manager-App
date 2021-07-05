// const Reservation = require("../models/reservations");
// const Rooms = require('../models/roomsModel');
// const mongoose = require('mongoose');

// module.exports = {
//   createReservation: async (req, res, next) => {
//     console.log('ok');
//     const { scheduledTimeStart, scheduledTimeFinish, date, users, seat, room } = req.body;
//     console.log(room);
//     try{
//       const newReservation = new Reservation({
//         date, 
//         users,
//         seat,
//         room,
//         scheduledTimeStart,
//         scheduledTimeFinish,
//       });
//       console.log(newReservation);
//       const reservationSaved = await newReservation.save();
//       //buscar primero el room y luego guardar reservaciones de esa sala
//       const connection = mongoose.connection;
//       connection.db.collection("rooms", function(err, collection){
//         collection.findOneAndUpdate({name: room}, { $push: { reservations: reservationSaved } }, (err, res) => {
//           if (err) {console.log(err)};
//           console.log(res);
//         });
//       });
//       console.log(reservationSaved);
//       return res.status(200).json({reservationSaved});
//     } catch(err) {
//         return next(400);
//     }
//   },
// };
const Reservation = require("../models/reservations");

module.exports = {
  createReservation: async (req, res) => {
    try{
      const body = req.body;
      const reservation = await Reservation.create({Start:body.Start, Finish:body.Finish, users:body.users, seat:body.seat });
      return res.status(200).json({reservation});
    } catch(error){
        console.log(error);
    }
  },
  deleteReservation: async (req, res) => {
    try {
        const id = req.params.id;
        const reservations = await Reservation.remove({'_id':id}).exec();
        return res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
  },
  findReservation: async (req, res) => {
    try {
        const number = req.params.number;
        const reservations = await Reservation.findOne({'_id':number}).exec();
        return res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
  },
  reservationAll: async (req, res) => {
    try {
        const reservations = await Reservation.find({}).populate('users').exec()
        res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
  },  
  searchByUser: async (req, res) => {
    try {
        const user = req.params.user;
        const data =await Reservation.find({}).populate('users').where('users').equals(user).sort({created_at:'asc'}).exec();
        res.status(200).json({data});
    } catch (error) {
        console.log(error);
    }
  },
}
