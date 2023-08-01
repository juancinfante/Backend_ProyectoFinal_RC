const express = require('express');
const app = express();
require('dotenv').config();
const {dbConnection} = require('./database/config');
const cors = require('cors');
app.listen(process.env.PORT,() => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
})
app.use(cors());

// Conecta a base de datos
dbConnection();

// Lectura y parseo del body
app.use(express.json());


// RUTAS
app.use('/auth', require('./rutas/auth'));




