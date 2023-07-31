const express = require('express');
const app = express();
require('dotenv').config();
const {dbConnection} = require('./database/config');

app.listen(process.env.PORT,() => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
})

dbConnection();




