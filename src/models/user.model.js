const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  Nom: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },

  Prenom: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },

  Adresse: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 2
  },

  Ville: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 2
  },

  CP: {
    type: Number,
    required: true,
    maxLength: 5,
    minLength: 2
  },

  Telephone: {
    type: Number,
    required: true,
    maxLength: 15,
    minLength: 10
  },

  Email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    maxLength: 50,
  },

  Password: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 8
  },

  Admin: {
    type: Boolean,
    default: false,
  },

  Entreprise: {
    type: Boolean,
    required: true,
    default: false,
  },

  Freelance: {
    type: Boolean,
    required: true,
    default: false,
  },
},
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  
  if (!this.isModified("MDP")) {
    return next();
  }

  bcrypt.hash(this.MDP, 10, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    this.MDP = hashedPassword
    next();
  });

})

module.exports = mongoose.model('User', userSchema);
