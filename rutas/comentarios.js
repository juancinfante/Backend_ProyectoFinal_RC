const express = require('express');
const { check } = require('express-validator');
const {validarJWT} = require('../middlewares/validar-jwt');
const { comentar, obtenerComentarios } = require('../controllers/comentarios.controllers');
const router  = express.Router();

router.get('/comentarios', obtenerComentarios);
router.post('/comentar', comentar);

module.exports = router;