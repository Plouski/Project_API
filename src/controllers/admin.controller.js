const User = require("../models/user.model");
const Competence = require("../models/competence.model");
const Metier = require("../models/metier.model");
const Mission = require("../models/mission.model");
const Freelance = require("../models/freelance.model");

/***************UTILISATEURS***************/
exports.getTousUsers = (res) => {
    User.find()
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err));
}

exports.getUser = (req, res) => {
    User.findById(req.userToken.id)
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: "Utilisateur introuvable"
            })
        }
        res.send(user);
    })
    .catch(err => res.status(400).send(err)) 
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: "Utilisateur introuvable"
            })
        }
        User.findById(user._id)
        .then(userupdated => {
            res.send(userupdated);
        })
    })
    .catch(err => res.status(400).send(err))
}

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: "Utilisateur introuvable"
            })
        }
        User.findById(user._id)
        .then(userdeleted => {
            res.send(userdeleted);
        })
    })
    .catch(err=>res.status(400).send(err))
}

/***************COMPETENCES***************/
exports.getTousCompetences = (res) => {
    Competence.find()
    .then(competences => res.send(competences))
    .catch(err => res.status(400).send(err));
}

exports.getCompetence = (req, res) => {
    Competence.findById(req.userToken.id)
    .then(competence => {
        if (!competence) {
            return res.status(404).send({
                message: "Competence introuvable"
            })
        }
        res.send(competence);
    })
    .catch(err => res.status(400).send(err)) 
}

exports.updateCompetence = (req, res) => {
    Competence.findByIdAndUpdate(req.params.id, req.body)
    .then(competence => {
        if (!competence) {
            return res.status(404).send({
                message: "Competence introuvable"
            })
        }
        Competence.findById(competence._id).then(competenceupdated => {
            res.send(competenceupdated);
        })
    })
    .catch(err => res.status(400).send(err))
}

exports.deleteCompetence = (req, res) => {
    Competence.findByIdAndDelete(req.params.id)
    .then(competence => {
        if (!competence) {
            return res.status(404).send({
                message: "Competence introuvable"
            })
        }
        Competence.findById(competence._id).then(competencedeleted => {
            res.send(competencedeleted);
        })
    })
    .catch(err=>res.status(400).send(err))
}

/***************METIERS***************/
exports.getTousMetiers = (res) => {
    Metier.find()
    .then(metiers => res.send(metiers))
    .catch(err => res.status(400).send(err));
}

exports.getMetier = (req, res) => {
    Metier.findById(req.userToken.id)
    .then(metier => {
        if (!metier) {
            return res.status(404).send({
                message: "Metier introuvable"
            })
        }
        res.send(metier);
    })
    .catch(err => res.status(400).send(err)) 
}

exports.updateMetier = (req, res) => {
    Metier.findByIdAndUpdate(req.params.id, req.body)
    .then(metier => {
        if (!metier) {
            return res.status(404).send({
                message: "Metier introuvable"
            })
        }
        Metier.findById(metier._id).then(metierupdated => {
            res.send(metierupdated);
        })
    })
    .catch(err => res.status(400).send(err))
}

exports.deleteMetier = (req, res) => {
    Metier.findByIdAndDelete(req.params.id)
    .then(metier => {
        if (!metier) {
            return res.status(404).send({
                message: "Metier introuvable"
            })
        }
        Metier.findById(metier._id).then(metierdeleted => {
            res.send(metierdeleted);
        })
    })
    .catch(err=>res.status(400).send(err))
}

/***************MISSIONS***************/
exports.getTousMissions = (res) => {
    Mission.find()
    .then(missions => res.send(missions))
    .catch(err => res.status(400).send(err));
}

exports.getMission = (req, res) => {
    Mission.findById(req.userToken.id)
    .then(mission => {
        if (!mission) {
            return res.status(404).send({
                message: "Mission introuvable"
            })
        }
        res.send(mission);
    })
    .catch(err => res.status(400).send(err)) 
}

/***************FREELANCES***************/
exports.getTousFreelances = (res) => {
    Freelance.find()
    .then(freelances => res.send(freelances))
    .catch(err => res.status(400).send(err));
}

exports.getFreelance = (req, res) => {
    Freelance.findById(req.userToken.id)
    .then(freelance => {
        if (!freelance) {
            return res.status(404).send({
                message: "Freelance introuvable"
            })
        }
        res.send(freelance);
    })
    .catch(err => res.status(400).send(err)) 
}