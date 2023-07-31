const express = require('express');
const { crearUsuario } = require('../controllers/auth.controller');
const router  = express.Router();

router.get('/register', crearUsuario);

module.exports = router;
