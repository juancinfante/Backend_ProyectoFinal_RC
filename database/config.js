const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ProyectoFinal', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida.');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1); // Salimos del proceso si no podemos conectarnos a la base de datos
  }
};

module.exports = { dbConnection };

