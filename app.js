const express = require('express');
const app = express();
require('dotenv').config();
const { dbConnection } = require('./database/config');
const validarJWT = require('./middlewares/validar-jwt');
//const cors = require('cors');



// app.use(cors());

// Conecta a base de datos
dbConnection();

// Lectura y parseo del body
app.use(express.json());

// RUTAS
app.use('/auth', require('./rutas/auth'));
app.use('/admin', require('./rutas/admin'));

// Rutas de artículos
const articulosRoutes = require('./rutas/articulos');
app.use('/api/articulos', articulosRoutes);


app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});