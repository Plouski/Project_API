const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entreprise.controller');
const verifyToken = require('../middlewares/verifyToken');

router.get("/",verifyToken,  entrepriseController.getMission);
router.post("/mission", verifyToken, entrepriseController.createMission);
router.get("/missions", verifyToken, entrepriseController.getTousMissions);
router.put("/:id", verifyToken, entrepriseController.updateMission);
router.delete("/:id", verifyToken, entrepriseController.deleteMission);
router.get("/freelances", verifyToken, entrepriseController.filtrerFreelance);

module.exports = router;