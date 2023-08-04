const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Producto = require("../models/product.model");


// USUARIO
const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({
            usuarios
        })
    } catch (error) {
        console.log(error);
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

const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.json({
                mgs: "Usuario no existe."
            })
        }
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({
          msg: "Usuario eliminado."  
        })
    } catch (error) {
        console.log(error)
    }
}

// PRODUCTO
const agregarProducto = async (req , res) =>{
    try {
		let producto = new Producto(req.body);

		await producto.save();

		res.status(201).json({
			ok: true,
			msg: 'producto creado',
			producto,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: true,
			msg: 'Hable con el administrador',
		});
	}
}

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json({
            productos
        })
    } catch (error) {
        console.log(error);        
    }
}

module.exports = {
    obtenerUsuarios,
    editarUsuario,
    eliminarUsuario,
    agregarProducto,
    obtenerProductos
};