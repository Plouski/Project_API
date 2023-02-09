const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

//Inscription
exports.register = async (req, res, next) => {
  const newUser = new User({
    Nom: req.body.Nom,
    Prenom: req.body.Prenom,
    Adresse: req.body.Adresse,
    Ville: req.body.Ville,
    CP: req.body.CP,
    Telephone: req.body.Telephone,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  try {
    const newUserToSave = await newUser.save();
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        Email: testAccount.Email, // generated ethereal user
        Password: testAccount.Password, // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: '"Inès GERVAIS" <foo@example.com>', // sender address
      to: testAccount.Email, // list of receivers
      subject: "Inscription", // Subject line
      text: "Vous etes bien inscrit(e) !", // plain text body
      html: "Vous etes bien inscrit(e)", // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return res.send(newUserToSave);
  }
  catch(err) {
    next(err)
  }
}

//Connexion
exports.login = (req, res) => {
  User.findOne({ Email: req.body.Email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message:"Utilisateur introuvable"
        })
      }
      let passwordValid = bcrypt.compareSync(req.body.Password, user.Password);
      if (!passwordValid) {
        return res.status(401).send({
          message: "Mot de passe invalide",
          auth: false
        })
      }
      let userToken = jwt.sign({
        id: user._id,
        Admin:user.Admin
        },process.env.JWT_SECRET
      )
      res.send({
        message: "Utilisateur connecté",
        auth: true,
        token:userToken
      })
    })
  .catch(err=>res.Status(400).send(err))
}