const User = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

//Mettre à jour les informations personnelles de l'utilisateur
exports.updateInformationsPersonnelles = (req, res) => {
  User.findOneAndUpdate(req.body.Email, req.body)
  .then(user => {
      User.findById(user.email).then(userupdated => {
          res.send(userupdated);
      })
  })
  .catch(err => res.status(400).send(err))
}

//Changer son mdp
exports.ChangementMDP = (req, res) => {
  User.findOne({ Email: req.body.Email })
  .then((user) => {
      let passwordValid = bcrypt.compareSync(req.body.Password, user.Password);
      if (!passwordValid) {
          return res.status(401).send({
          message: "Mot de passe invalide",
          auth: false
          })
      }
      User.findOneAndUpdate(req.body.Email, req.body)
      let userToken = jwt.sign({
        id: user._id,
        },process.env.JWT_SECRET
      )
      res.send({
        message: "Mot de passe bien modifié",
        auth: true,
        token:userToken
      })
    })
  .catch(err=>res.Status(400).send(err))
}

//Reinitialiser son mdp
