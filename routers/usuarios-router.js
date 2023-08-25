var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

//crear un usuario
router.post('/', function (req, res) {
    let u = new usuario(
        {
            nombre: req.body.nombre,
            correo: req.body.correo,
            contrasena: req.body.contrasena,
            idDirectorio: "",
            archivosCompartidos: [],
            descripcion: req.body.descripcion,
            imagenes: [],
            plan: req.body.plan

        }
    );
    u.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

//obtener todos los usuarios
router.get('/', (req, res) => {
    usuario.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//obtener un usuario
router.get('/:id', (req, res) => {
    const {id} = req.params;
    usuario.findById(id).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
});

//obtener un usuario por nombre y contrasena
router.post('/login', (req, res)=>{
    const {nombre, contrasena} = req.body;
    usuario.findOne({ nombre: nombre, contrasena: contrasena }).
    then(result=> {
        res.send(result);
        res.end();
    }).catch(error=> {
        res.send(error);
        res.end();
    })
});

//actualizar un usuario
router.put('/:id', async (req, res)=>{
    const {id} = req.params;

    const u = await usuario.findByIdAndUpdate(id, req.body);

    usuario.findById(id)
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=> {
        res.send(error);
        res.end();
    })
});

//eliminar un usuario
router.delete('/:id', async (req, res)=>{
    const {id} = req.params;

    usuario.findByIdAndDelete(id).then(result => {
        res.send(result);
        res.end();
    }).catch(error=> {
        res.send(error);
        res.end();
    })
});


module.exports = router;