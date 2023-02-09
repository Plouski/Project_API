const Mission = require("../models/mission.model");

/***************MISSIONS***************/

//Créer une mission
exports.createMission = (req, res) => {
    Mission.create(req.body)
    .then(mission => {
    res.send(mission)
    })
    .catch(err => res.status(404).send(err))
}

//Obtenir tous les missions (faculatif)
exports.getTousMissions = (res) => {
    Mission.find()
    .then(missions => res.send(missions))
    .catch(err => res.status(400).send(err));
}

//Obtenir une mission (faculatif)
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

//Maj une mission
exports.updateMission = (req, res) => {
    Mission.findByIdAndUpdate(req.params.id, req.body)
    .then(mission => {
        if (!mission) {
            return res.status(404).send({
                message: "Mission introuvable"
            })
        }
        Mission.findById(mission._id).then(missionupdated => {
            res.send(missionupdated);
        })
    })
    .catch(err => res.status(400).send(err))
}

//Supprimer une mission
exports.deleteMission = (req, res) => {
    Mission.findByIdAndDelete(req.params.id)
    .then(mission => {
        if (!mission) {
            return res.status(404).send({
                message: "Mission introuvable"
            })
        }
        Mission.findById(mission._id).then(missiondeleted => {
            res.send(missiondeleted);
        })
    })
    .catch(err=>res.status(400).send(err))
}

//Filtrer une freelance
exports.filtrerFreelance = (res) => {
    try {
        const freelances = Freelance.find();
        const filteredFreelance = freelances.filter((freelance) => {
            return req.body.searchString 
            && 
                freelance.Taux_journalier.includes(req.body.searchString) 
            && 
                freelance.Annee_experience.includes(req.body.searchString)
            &&
                freelance.Competence.includes(req.body.searchString)
            && 
                freelance.Metier.includes(req.body.searchString)
        })
        res.send(filteredFreelance);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
