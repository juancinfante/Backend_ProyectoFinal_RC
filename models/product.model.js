const { Schema, model} = require('mongoose');

const productoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        default: "Disponible"
    },
    precio:{
        type: String,
        default: "Habilitado"   
    },
    detalle: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        default: "usuario"
    }
})

module.exports = model('Producto', productoSchema);