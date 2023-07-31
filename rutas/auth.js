const express = require('express');
const { crearUsuario } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const router  = express.Router();

router.get('/register', [
    check('name','El nombre es obligatorio.').not().isEmpty(),
    check('name','El nombre debe ser mayor a 5 caracteres.').isLength({min: 6}),
    check('password','El password debe ser mayor a 5 caracteres.').isLength({min:5}),
    check('email','Email no valido').isEmail()
], crearUsuario);

module.exports = router;
