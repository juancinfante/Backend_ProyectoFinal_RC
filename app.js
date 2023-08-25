const express = require('express');
const app = express();
require('dotenv').config();
const {dbConnection} = require('./database/config');
const cors = require('cors');

const PORT = process.env.PORT || 4003
app.listen(PORT,() => {
    console.log("Servidor corriendo en puerto " + PORT);
})
app.use(cors());

dbConnection();

app.use(express.json());


// RUTAS
app.use('/auth', require('./rutas/auth'));
app.use('/admin', require('./rutas/admin'));
app.use('/cart', require('./rutas/pedidos'));
app.use('/comentarios', require('./rutas/comentarios'));




