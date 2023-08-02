// routes/articulos.js
const express = require('express');
const router = express.Router();
const Articulo = require('../models/articulo');
const { validarJWT } = require('../middlewares/validar-jwt');

// Obtener todos los artículos
router.get('/', async (req, res) => {
  try {
    const articulos = await Articulo.find().populate('autor', 'nombre'); // Populamos el campo 'autor' con solo el campo 'nombre' del modelo Usuario
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos.' });
  }
});

// Obtener un artículo por su ID
router.get('/:id', async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id).populate('autor', 'nombre');
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado.' });
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el artículo.' });
  }
});

// Crear un nuevo artículo 
router.post('/', async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const nuevoArticulo = new Articulo({ titulo, contenido }); // Usamos el ID del usuario del token como autor
    await nuevoArticulo.save();
    res.json(nuevoArticulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el artículo.' + error });
  }
});

// Actualizar un artículo por su ID (requiere autenticación con JWT)
router.put('/:id', validarJWT, async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const articulo = await Articulo.findByIdAndUpdate(
      req.params.id,
      { titulo, contenido },
      { new: true } // Devuelve el artículo actualizado en lugar del original
    );
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado.' });
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el artículo.' });
  }
});

// Eliminar un artículo por su ID (requiere autenticación con JWT)
router.delete('/:id', async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndRemove(req.params.id);
    if (!articulo) {
      return res.status(404).json({ error: 'Artículo no encontrado.' });
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artículo.' });
  }
});

module.exports = router;