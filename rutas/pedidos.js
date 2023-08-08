const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { agregarPedido, obtenerPedido, obtenerPedidos, editarPedido } = require('../controllers/pedidos.controllers');
const router  = express.Router();

router.post('/pedido', agregarPedido);

router.get('/pedido/:id', obtenerPedido);

router.get('/pedidos', obtenerPedidos);

router.put('/pedido', editarPedido);



module.exports = router;