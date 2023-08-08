const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { agregarPedido } = require('../controllers/pedidos.controllers');
const router  = express.Router();

router.post('/pedido', agregarPedido);

module.exports = router;