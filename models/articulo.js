// models/articulo.js
const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  codigo: { type: String }, // Eliminar la opción 'unique' si no es necesario
});

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;