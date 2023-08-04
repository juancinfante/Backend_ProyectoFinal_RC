const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { obtenerUsuarios, editarUsuario, eliminarUsuario, agregarProducto, obtenerProductos, eliminarProducto, editarProducto } = require('../controllers/admin.controller');
const router  = express.Router();

// USUARIOS
router.get('/usuarios', obtenerUsuarios);

router.put('/editarUsuario', editarUsuario);

router.delete('/usuario/:id', eliminarUsuario);

// PRODUCTOS
router.post('/producto', agregarProducto);

router.get('/productos', obtenerProductos);

router.delete('/producto/:id', eliminarProducto);

router.put('/producto', editarProducto);


module.exports = router;
