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
