const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pedido = require("../models/pedido.model");

const agregarPedido = async (req, res) => {
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
}
const obtenerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.find({ id_usuario: req.params.id })
        res.status(200).json({
            pedido
        });
    } catch (error) {
        res.status(500).json({
            ok: true,
            msg: 'Hable con el administrador',
        });
    }
}

const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.status(200).json({
            pedidos
        })
    } catch (error) {
        console.log(error);
    }
}

const editarPedido = async (req, res) => {
	try {
		const pedidoEditar = await Pedido.findById(req.body._id);

		if (!pedidoEditar) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe ningun pedido con este Id',
			});
		}

		await Pedido.findByIdAndUpdate(req.body._id, req.body);

		res.status(200).json({
			ok: true,
			msg: 'Pedido editado',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'hable con el administrador',
		});
	}
};

module.exports = {
    agregarPedido,
    obtenerPedido,
    obtenerPedidos,
    editarPedido,
}