const {Schema, SchemaType, model} = require('mongoose');

const reservationSchema = new Schema({
    Start:{
        required:true,
        type:Date,
        trim:true
    },
    Finish:{
        required:true,
        type:Date,
        trim:true
    },
    users:{
        required:true,
        type: Schema.ObjectId,
        ref:'Users'
    },
    seat:{
        required:true,
        type: String,
        ref: 'Seats'
    }
});

const Reservation = model('Reservation', reservationSchema);
module.exports = Reservation;