const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        unique: false,
        trim: false
    },
    username: {
        type: String,
        unique: false,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: false
    }
});

const Users = model('Users', usuarioSchema);
module.exports = Users;