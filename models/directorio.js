var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        contenido: []
    }
);

module.exports = mongoose.model('directorios', esquema);