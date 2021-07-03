const auth = require('../configs/compare');
const bc = require('../configs/crypt');
const transporter = require('../configs/nodemailer');

<<<<<<< HEAD
const Users = require('../models/users');

module.exports = {
    createUser: async (req, res, next) => {
        console.log('createUser rq', req.body)
        const { email, password, username } = req.body;
        if ( !password || !email || (!email && !password) || password.length <= 6 ) { //Agregar la validación de email con expresiones regulares
            return next(400);
        }
        try{
          const invalidUser = await Users.findOne({ email: email });
          if (invalidUser) return next(403);
          const passwordCrypt = await bc.Crypt(password);
          const user = await Users.create({ email: email, password: passwordCrypt, username: username });
          return res.status(200).json({ user });
        } catch(err) {
            next(501, err);
        }
    },
    updateUser: async (req, res, next) => {
        let data = {};
        const body = req.body;
        if(body.username) {
            data = {'username': body.username};
        } else if (body.password) {
            const passwordCrypt = await bc.Crypt(body.password);
            data = {'password': passwordCrypt};
            console.log('SE cambió la contraseña');
        }
        const _id = req.params.id;
        const filter = { _id };
        const update = { new: true };
        try {
            const user = await Users.findByIdAndUpdate(filter, data, update).exec();
            return res.status(200).json({user});
        } catch (err) {
            next(400, err);
        }
    },
    updatePassword: async (req, res) => {
        const { user, authorization } = req.headers;
        // const { authorization } = req.headers;
        // if (!authorization) {
        //     return next();
        // }

        // const token = authorization.split(' ')[1];
        // let verificationLink = `http://localhost:3000/changePassword/${token}`

        // jwt.verify(token, secret, (err, decodedToken) => {
        //     if (err) { 
        //     console.log(err)
        //     next(403); 
        //     }
        //     console.log(decodedToken);
        //     Users.findOne({ _id: decodedToken.payload.id }, (err, user) => {
        //     if (err) { next(500, err); }
            
        //     });
        // });
        try {
            await transporter.sendMail({
                from: '"Forgot password" <brendagar88@gmail.com>', // sender address
                to: user.email, // list of receivers
                subject: "Forgot password ✔", // Subject line
                text: "Forgot your password?", // plain text body
                html: `
                    <b>Please on the following link to complete the process</b>
                    <a href="${verificationLink}">${verificationLink}</a>
                    `, // html body
              });
        } catch (err){
            console.log(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            const users = await Users.remove({'_id':id}).exec();
            return res.status(200).json({users});
        } catch (error) {
            console.log(error);
        }
    },
    
    findUser: async (req, res) => {
        try {
            const username = req.params.username;
            const users = await Users.findOne({'username':username}).exec();
            return res.status(200).json({users});
        } catch (error) {
            console.log(error);
        }
    },
    
    usersAll: async (req, res) => {
        try {
            const users = await Users.find({}).exec()
            res.status(200).json({users});
        } catch (error) {
            console.log(error);
        }
    },
    
    userSearcher: async (req, res) => {
        console.log('ok');
        try {
            const username = req.params.username;
            const users = await Users.find({'username':{$regex:'.*' + username + '.*' }});
            return res.status(200).json({users});
        }catch(error){
            console.log(error)
        }
    }
}
=======
const Users = require("../models/Users");

const AlterUser = async(req, res) => {
    try {
        const _id = req.params.id;
        const body = req.body;
        const filter = { _id };
        const data = { "username": body.username };
        const update = { new: true };
        const users = await Users.findByIdAndUpdate(filter, data, update).exec();
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error);
    }
}

const Login = async(req, res) => {
    try {
        const body = req.body;
        const users = await Users.findOne({ 'email': body.email }).lean();
        console.log(users);
        const data = await auth.Comparar(body.password, users.password);
        return {...users, data };
    } catch (error) {
        console.log(error);
    }
};

const CreateUser = async(req, res) => {
    try {
        const body = req.body;
        const password = await bc.Crypt(req.body.password);
        // const users = await Users.create({ email: body.email, username: body.username, name: body.name, password: password, phonenumber: body.phonenumber });
        const users = await Users.create({ email: body.email, name: body.name, password: password });
        console.log(body)
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error);
    }
}

const DeleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const users = await Users.remove({ '_id': id }).exec();
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error);
    }
}

const FindUser = async(req, res) => {
    try {
        const username = req.params.username;
        const users = await Users.findOne({ 'username': username }).exec();
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error);
    }
}

const UsersAll = async(req, res) => {
    try {
        const users = await Users.find({}).exec()
        res.status(200).json({ users });
    } catch (error) {
        console.log(error);
    }
}

const UserSearcher = async(req, res) => {
    try {
        const username = req.params.username;
        const users = await Users.find({ 'username': { $regex: '.*' + username + '.*' } });
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error)
    }
}

const RecoverPass = async(req, res) => {

}

module.exports = { AlterUser, Login, CreateUser, DeleteUser, FindUser, UsersAll, UserSearcher }
>>>>>>> cfd198b7e1a50ebedde570381e90b370a7f2cbc8
