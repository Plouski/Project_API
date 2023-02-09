const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.get("/",verifyToken, userController.getUser);
router.put("/changerMDP", verifyToken, userController.ChangementMDP);
router.put("/reinitialiser", verifyToken, userController.reinitilisation);
router.put("/profil", verifyToken, userController.updateInformationsPersonnelles);

module.exports = router;