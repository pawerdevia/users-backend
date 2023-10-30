const express = require('express');
const userRoutes = require('./user.router')
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRoutes)


module.exports = router;