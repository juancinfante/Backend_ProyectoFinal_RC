const { Schema, model} = require('mongoose');


const comentarioSchema = Schema({
    id_prod: {
        type: String,
        required: true
    },
    nombre_user: {
        type: String,
        required: true,
    },
    texto:{
        type: String,
        required: true 
    },
    fecha:{
        type: String,
        required: true,
        default: "-"
    }
})

module.exports = model('Comentario', comentarioSchema);