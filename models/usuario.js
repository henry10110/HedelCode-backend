var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: String,
        correo: String,
        alias: String,
        contrasena: String,
        descripcion: String,
        imagen: String,
        inicio: mongoose.SchemaTypes.mixed,
        plan: String,
        proyectos: Array
    }
);

module.exports = mongoose.model('usuarios', esquema);