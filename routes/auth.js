const express = require('express');
const authController= require('../controllers/auth');
const authRouter = express.Router();


authRouter.post('/register',authController.regesterUser);

authRouter.post('/login',authController.loginUser);

module.exports = authRouter