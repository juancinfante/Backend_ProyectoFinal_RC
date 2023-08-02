const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { obtenerUsuarios, editarUsuario } = require('../controllers/admin.controller');
const router  = express.Router();

router.get('/usuarios', obtenerUsuarios);

router.put('/editarUsuario', editarUsuario);

module.exports = router;
