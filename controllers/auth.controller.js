const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const crearUsuario = async (req, res) => {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.mapped()
        })
    }

    try {
        let usuarioExiste = await Usuario.findOne({ email });
        if (usuarioExiste) {
            return res.status(400).json({
                msg: "Este email ya esta en uso"
            });
        }
        let usuario = new Usuario(req.body)

        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        const payload = {
            id: usuario._id,
            name: usuario.name,
            rol: usuario.rol
        }

        const token = jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: "2h",
        });

        res.status(200).json({
            msg: "Registrado con exito.",
            token,
            id: usuario._id,
            name: usuario.name,
        });

    } catch (error) {
        console.log(error)
    }
}

const loguearUsuario = async (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.mapped()
        })
    }

    try {
        let usuarioExiste = await Usuario.findOne({ email });
        if (!usuarioExiste) {
            return res.status(400).json({
                msg: "Email o contraseña incorrectos."
            });
        }else{
            const validarContraseña = bcrypt.compareSync(password, usuarioExiste.password);
            if (!validarContraseña) {
                return res.status(400).json({
                    msg: "Email o contraseña incorrectos"
                })
            }

        const payload = {
            id: usuarioExiste._id,
            name: usuarioExiste.name,
            rol: usuarioExiste.rol
        }

        const token = jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: "2h",
        });

            res.status(201).json({
                msg: "Logueado con exito!",
                name: usuarioExiste.name,
                id: usuarioExiste._id,
                rol: usuarioExiste.rol,
                token

            })
        }

        
    } catch (error) {
        console.log(error)
    }
}

const validarUsuario = (req, res) => {
    res.status(200).json({
        ok: true,
    });
}

module.exports = {
    crearUsuario,
    loguearUsuario,
    validarUsuario
};
