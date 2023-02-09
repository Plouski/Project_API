const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
    Titre: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 2
    },
    Date_debut: {
        type: Date,
        required: true,
        minLength: 2,
        default: Date.now,
    },
    Date_fin: {
        type: Date,
        required: true,
        minLength: 2
    },
    Montant_total: {
        type: Number,
        required: true,
        minLength: 2
    },
    Description: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 2
    },
    Statut: {
        type: String,
        required: true,
        enum: ['en cours', 'clôturé'],
        default: 'en cours',
    },
    competence: {
        type: [
          {
            type: mongoose.Types.ObjectId,
            ref: 'Competence',
          },
        ],
        required: [true, 'Une mission doit avoir au moins une compétence'],
      },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Mission', missionSchema);
