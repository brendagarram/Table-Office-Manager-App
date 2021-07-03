const Reservation = require("../models/reservations");

const CreateReservation = async (req, res) => {
    try{
      const body = req.body;
      const reservation = await Reservation.create({Start:body.Start, Finish:body.Finish, users:body.users, seat:body.seat });
      return res.status(200).json({reservation});
    } catch(error){
        console.log(error);
    }
}

const DeleteReservation = async (req, res) => {
    try {
        const id = req.params.id;
        const reservations = await Reservation.remove({'_id':id}).exec();
        return res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
}

const FindReservation = async (req, res) => {
    try {
        const number = req.params.number;
        const reservations = await Reservation.findOne({'_id':number}).exec();
        return res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
}

const ReservationAll = async (req, res) => {
    try {
        const reservations = await Reservation.find({}).exec()
        res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
}

const SearchByUser = async (req, res) => {
    try {
        const user = req.params.user;
        const data =await Reservation.find({}).populate('users').where('users').equals(user).sort({created_at:'asc'}).exec();
        res.status(200).json({data});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { CreateReservation, DeleteReservation, FindReservation, ReservationAll, SearchByUser}