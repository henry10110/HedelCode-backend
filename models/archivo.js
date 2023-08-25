var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        archivos: []
    }
);

module.exports = mongoose.model('archivos' ,esquema);