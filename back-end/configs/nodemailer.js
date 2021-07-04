const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'brendagar88@gmail.com', // generated ethereal user
    pass: '', // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log('Funciona el nodemailer');
})