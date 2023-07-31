const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT,() => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
})



