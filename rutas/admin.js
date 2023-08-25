const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { obtenerUsuarios, editarUsuario, eliminarUsuario, agregarProducto, obtenerProductos, eliminarProducto, editarProducto, obtenerProducto, obtenerUsuario } = require('../controllers/admin.controller');
const router  = express.Router();

router.get('/usuarios', obtenerUsuarios);

router.get('/usuario/:id', obtenerUsuario);

router.put('/editarUsuario', validarJWT, editarUsuario);

router.delete('/usuario/:id', validarJWT,eliminarUsuario);

router.post('/producto', validarJWT,agregarProducto);

router.get('/productos', obtenerProductos);

router.get('/producto/:id', obtenerProducto);

router.delete('/producto/:id',validarJWT ,eliminarProducto);

router.put('/producto',validarJWT ,editarProducto);

router.get('/validarjwt',validarJWT )

module.exports = router;
