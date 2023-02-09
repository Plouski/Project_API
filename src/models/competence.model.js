const mongoose = require('mongoose');

const competenceSchema = mongoose.Schema({
    Nom: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Competence', competenceSchema);
