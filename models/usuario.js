var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombre: String,
        correo: String,
        contrasena: String,
        idDirectorio: mongoose.SchemaTypes.Mixed,
        archivosCompartidos: [],
        descripcion: String,
        imagenes: [],
        plan: Number
    }
);

module.exports = mongoose.model('usuarios', esquema);