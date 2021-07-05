const Reservation = require("../models/reservations");

module.exports = {
  createReservation: async (req, res) => {
    try{
      const body = req.body;
      console.log(body);
      const reservation = await Reservation.create({ Start:body.Start, Finish:body.Finish, users:body.users, seat:body.seat });
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
