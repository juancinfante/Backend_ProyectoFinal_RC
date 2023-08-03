const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { obtenerUsuarios, editarUsuario, eliminarUsuario, agregarProducto } = require('../controllers/admin.controller');
const router  = express.Router();

router.get('/usuarios', obtenerUsuarios);

router.put('/editarUsuario', editarUsuario);

router.delete('/usuario/:id', eliminarUsuario);

router.post('/producto', agregarProducto);

module.exports = router;
