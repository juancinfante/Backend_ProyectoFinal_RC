const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { obtenerUsuarios } = require('../controllers/admin.controller');
const router  = express.Router();

router.get('/usuarios', obtenerUsuarios);

module.exports = router;
