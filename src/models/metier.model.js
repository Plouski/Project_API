const mongoose = require('mongoose');

const metierSchema = mongoose.Schema({
  Nom: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },
  competence: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Competence',
    },
  ],
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Metier', metierSchema);
