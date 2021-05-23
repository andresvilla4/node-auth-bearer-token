const mongoose = require('mongoose');
const config = require('../../config/config');

let urlDB = config.urlDB;

mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    try {
        console.log('Conectado a la base de datos...');
    } catch (error) {
        console.log('Error al conectar a la base de datos...');
    }
});