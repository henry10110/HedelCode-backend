var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

//crear un usuario
router.post('/', function(req, res){
    let u = new usuario (
        {
            nombre: req.body.nombre,
            correo: req.body.correo,
            alias: req.body.alias,
            contrasena: req.body.contrasena,
            descripcion: '',
            imagen: '',
            inicio: req.body.inicio,
            plan: req.body.plan,
            proyectos: []

        }
    );
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

module.exports = router;