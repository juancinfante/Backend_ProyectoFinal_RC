const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({
            usuarios
        })
    } catch (error) {
        console.log(error)
    }
}

const editarUsuario = async (req, res) => {
    try {

        const usuario = await Usuario.findById(req.body._id)
        if (!usuario) {
            res.status(200).json({
                msg: "No existe ID"
            })
        }
        await Usuario.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({
            msg: "producto actualizado"
        })

    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
}

module.exports = {
    obtenerUsuarios,
    editarUsuario
};