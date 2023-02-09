const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin');

//USERS
router.get("/user",verifyToken, verifyIsAdmin, adminController.getUser);
router.get("/users", verifyToken, verifyIsAdmin, adminController.getTousUsers);
router.put("/user/:id", verifyToken, verifyIsAdmin, adminController.updateUser);
router.delete("/user/:id", verifyToken, verifyIsAdmin, adminController.deleteUser);

//COMPETENCES
router.get("/competence",verifyToken, verifyIsAdmin, adminController.getCompetence);
router.get("/competences", verifyToken, verifyIsAdmin, adminController.getTousCompetences);
router.put("/competence/:id", verifyToken, verifyIsAdmin, adminController.updateCompetence);
router.delete("/competence/:id", verifyToken, verifyIsAdmin, adminController.deleteCompetence);

//METIERS
router.get("/metier",verifyToken, verifyIsAdmin, adminController.getMetier);
router.get("/metiers", verifyToken, verifyIsAdmin, adminController.getTousMetiers);
router.put("/metier/:id", verifyToken, verifyIsAdmin, adminController.updateMetier);
router.delete("/metier/:id", verifyToken, verifyIsAdmin, adminController.deleteMetier);

//MISSIONS
router.get("/mission",verifyToken, verifyIsAdmin, adminController.getMission);
router.get("/missions", verifyToken, verifyIsAdmin, adminController.getTousMissions);

//FREELANCES
router.get("/freelance",verifyToken, verifyIsAdmin, adminController.getFreelance);
router.get("/freelances", verifyToken, verifyIsAdmin, adminController.getTousFreelances);