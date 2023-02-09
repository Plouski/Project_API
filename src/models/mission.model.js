const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
    Titre: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 2
    },
    Date_debut: {
        type: Number,
        required: true,
        minLength: 2
    },
    Date_fin: {
        type: Number,
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
        minLength: 2
    },
    wishlist: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Metier' },
        { type: mongoose.Schema.Types.ObjectId, ref: 'Competence' }
    ]
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Mission', missionSchema);
