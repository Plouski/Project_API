const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route')
const userRouter = require('./user.route');
const entrepriseRouter = require('./entreprise.route')
const freelanceRouter = require('./freelance.route');
const adminRouter = require('./admin.route')

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/entreprise", entrepriseRouter);
router.use("/freelance", freelanceRouter);
router.use("/admin", adminRouter);

module.exports = router;
