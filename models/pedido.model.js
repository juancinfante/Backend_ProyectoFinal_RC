const { Schema, model} = require('mongoose');


const pedidoSchema = Schema({
    pedido: {
        type: [{}],
        required: true
    }
    ,
    direccion: {
        type: String,
        required: true,
    },
    estado:{
        type: String,
        default: "Pendiende"   
    },
    id_usuario: {
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    total:{
        type: Number,
        required: true
    }
    
})

module.exports = model('Pedido', pedidoSchema)