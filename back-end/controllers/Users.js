const auth = require('../configs/compare');
const bc = require('../configs/crypt');
// const transporter = require('../configs/nodemailer');
const Users = require('../models/Users');

module.exports = {
    createUser: async(req, res, next) => {
        const { email, password, username } = req.body;
        if (!password || !email || (!email && !password) || password.length <= 6) { //Agregar la validación de email con expresiones regulares
            return next(400);
        }
        try {
            const invalidUser = await Users.findOne({ email: email });
            if (invalidUser) return next(403);
            const passwordCrypt = await bc.Crypt(password);
            const user = await Users.create({ email: email, password: passwordCrypt, username: username });
            return res.status(200).json({ user });
        } catch (err) {
            next(501, err);
        }
    },
    updateUser: async(req, res, next) => {
        const body = req.body;
        let data = {};
        if (body.username) {
            data = { 'username': body.username };
        } else if (body.password) {
            const passwordCrypt = await bc.Crypt(body.password);
            data = { 'password': passwordCrypt };
        }
        const _id = req.params.id;
        const filter = { _id };
        const update = { new: true };
        try {
            const user = await Users.findByIdAndUpdate(filter, data, update).exec();
            return res.status(200).json({ user });
        } catch (err) {
            next(400);
        }
    },
    updatePassword: async(req, res) => {
        const { password } = req.body;
        const passwordCrypt = await bc.Crypt(password);
        const filter = { _id };
        const update = { new: true };
        try {
            const user = await Users.findByIdAndUpdate(filter, passwordCrypt, update).exec();
            return res.status(200).json({ user });
        } catch (err) {
            next(400, err);
        }
        // try {

        //     await transporter.sendMail({
        //         from: '"Forgot password" <brendagar88@gmail.com>', // sender address
        //         to: user.email, // list of receivers
        //         subject: "Forgot password ✔", // Subject line
        //         text: "Forgot your password?", // plain text body
        //         html: `
        //             <b>Please on the following link to complete the process</b>
        //             <a href="${verificationLink}">${verificationLink}</a>
        //             `, // html body
        //       });
        // } catch (err){
        //     console.log(err);
        // }
    },
    deleteUser: async(req, res) => {
        try {
            const id = req.params.id;
            const users = await Users.remove({ '_id': id }).exec();
            return res.status(200).json({ users });
        } catch (error) {
            console.log(error);
        }
    },

    findUser: async(req, res) => {
        try {
            const username = req.params.username;
            const users = await Users.findOne({ 'username': username }).exec();
            return res.status(200).json({ users });
        } catch (error) {
            console.log(error);
        }
    },

    usersAll: async(req, res) => {
        try {
            const users = await Users.find({}).exec();
            res.status(200).json({ users });
        } catch (error) {
            console.log(error);
        }
    },

    userSearcher: async(req, res) => {
        try {
            const username = req.params.username;
            const users = await Users.find({ 'username': { $regex: '.*' + username + '.*' } });
            return res.status(200).json({ users });
        } catch (error) {
            console.log(error)
        }
    }
}