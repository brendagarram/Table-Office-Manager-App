const {Schema, model} = require('mongoose');

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
        
    },
    date:{
        required:true,
        type:String,
        trim:true
    },
    occupied:{
        required:true,
        type: Array,
        trim: true
    }
});

const Reservation = model('Reservation', reservationSchema);
module.exports = Reservation;