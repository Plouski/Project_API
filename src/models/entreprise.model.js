const mongoose = require('mongoose');

const entrepriseSchema = mongoose.Schema({
  Raison_sociale: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 2
  },
  Statut_societe: {
    type: String,
    required: true,
    maxLength: 5,
    minLength: 2
  },
  Numero_siret: {
    type: Number,
    required: true,
    maxLength: 9,
    minLength: 2
  },
  Siege_social: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 2
  },
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Entreprise', entrepriseSchema);
