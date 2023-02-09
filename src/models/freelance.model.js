const mongoose = require('mongoose');

const freelanceSchema = mongoose.Schema({
  Taux_journalier: {
    type: Number,
    required: true,
    maxLength: 10,
    minLength: 2
  },
  Annee_experience: {
    type: Number,
    required: true,
    maxLength: 5,
    minLength: 1
  },
  wishlist: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Competence' },
    { type: mongoose.Schema.Types.ObjectId, ref: 'Metier' }
  ]
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Freelance', freelanceSchema);
