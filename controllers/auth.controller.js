const { validationResult } = require("express-validator");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');

const crearUsuario = async (req, res) => {
    const { name, email, password } = req.body;

    //Manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.mapped()
        })
    }

    // Validar si el email ya existe
    try {
        let usuarioExiste = await Usuario.findOne({ email });
        if (usuarioExiste) {
            return res.json({
                msg: "Este email ya esta en uso"
            });
        }

        // Aqui parseamos el usuario, quedaria como un objeto con name, password e email
        let usuario = new Usuario(req.body)

        // Luego debemos encriptar la contraseña
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
        res.status(200).json({
            msg: ">> Usuario registrado"
        });

    } catch (error) {
        console.log(error)
    }
}

const loguearUsuario = async (req, res) => {
    const { email, password } = req.body;

    //Manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.mapped()
        })
    }

    // Validar si el email ya existe
    try {
        let usuarioExiste = await Usuario.findOne({ email });
        if (!usuarioExiste) {
            return res.json({
                msg: "Email o contraseña incorrectos."
            });
        }else{
            // Ademas de chequear email debemos chequear contraseña
            const validarContraseña = bcrypt.compareSync(password, usuarioExiste.password);
            if (!validarContraseña) {
                return res.status(400).json({
                    msg: "Email o contraseña incorrectos"
                })
            }

            res.status(201).json({
                msg: "Logueado con exito!",
                usuarioExiste
            })
        }

        

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    crearUsuario,
    loguearUsuario
};
