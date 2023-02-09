const { body, validationResult } = require('express-validator');

exports.checkEmail = [
  body('email').isEmail().withMessage("Email format not valid")
]

exports.checkIdentity = [
  body('Prenom').isAlphanumeric().withMessage("Le format Prenom n'est pas valide"),
  body('Nom').isAlphanumeric().withMessage("Le format Nom n'est pas valide"),
  body('Adresse').isAlphanumeric().withMessage("Le format Adresse n'est pas valide"),
  body('Ville').isAlphanumeric().withMessage("Le format Ville n'est pas valide"),
  body('CP').isAlphanumeric().withMessage("Le format CP n'est pas valide"),
  body('Telephone').isAlphanumeric().withMessage("Le format Adresse n'est pas valide"),
  body('Email').isAlphanumeric().withMessage("Le format Email n'est pas valide"),

]

exports.checkPassword = [
  body('Password')
    .notEmpty()
    .isLength({ min: 8, max: 30 })
    .matches(/^[A-Za-z0-9 .,'!&(§è!çà)]+$/)
]

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors:errors.array()
    })
  }
  next();
}