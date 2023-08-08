const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pedido = require("../models/pedido.model");

const agregarPedido = async (req , res) =>{
    try {
		let pedido = new Pedido(req.body);

		await pedido.save();

		res.status(201).json({
			ok: true,
			msg: 'Pedido enviado',
			pedido,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: true,
			msg: 'Hable con el administrador',
		});
	}
    console.log("funciona")
}

module.exports = {
    agregarPedido,
}