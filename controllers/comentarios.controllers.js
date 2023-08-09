const { validationResult } = require("express-validator");
const Comentario = require('../models/comentarios.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const obtenerComentarios = async (res, req) => {
    try {
        const comentarios = await Comentario.find({ id_prod: req.params.id })
        res.status(200).json({
            comentarios
        });
    } catch (error) {
        res.status(500).json({
            ok: true,
            msg: 'Hable con el administrador',
        });
    }
}
const comentar = async (res, req) => {
    try {
        let comentario = new Comentario(req.body);

        await comentario.save();

        res.status(201).json({
            ok: true,
            msg: 'Comentario enviado!',
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    obtenerComentarios,
    comentar
}


