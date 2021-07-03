const {Schema, model} = require('mongoose');
const Seats = require("../models/seats");

const reservationSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  scheduledTimeStart: {
    type: String,
    required: true
  },
  scheduledTimeFinish: {
    type: String,
    required: true
  },  
  users:{
      //required:true,
      // type: Schema.ObjectId,
      // ref:'Users'
      type: String,
  },
  seat:{
      // //required:true,
      // type: Schema.ObjectId,
      // ref: 'Seats'
      type: String,
  },
  room:{
    //required:true,
    // type: Schema.ObjectId,
    // ref: 'Rooms'
    type: String,
},
});

const roomSchema = new Schema({
  name: {
      type: String,
  },
  reservations: [reservationSchema],
  status: {
      type: Boolean,
  },
  dateEntry: {  //fecha de creación de la sala
      type: Date,
      required: true,
  }, 
  numberSeats: {
    type: String,
    required: true,
  } 
});

const Rooms = model('Rooms', roomSchema);
module.exports = Rooms;