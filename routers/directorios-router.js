var express = require('express');
var router = express.Router();
var directorio = require('../models/directorio');

//crear un directorio
router.post('/', function (req, res) {
    let d = new directorio(
        {
            contenido: []
        }
    );
    d.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

//obtener el directorio del usuario
router.get('/:id', (req, res) => {
    const {id} = req.params;
    directorio.findById(id).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
});

//actualizar el directorio de un usuario
router.put('/:id', async (req, res)=>{
    const {id} = req.params;

    const d = await directorio.findByIdAndUpdate(id, req.body);

    directorio.findById(id)
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=> {
        res.send(error);
        res.end();
    })
});

//eliminar un directorio
router.delete('/:id', async (req, res)=>{
    const {id} = req.params;

    directorio.findByIdAndDelete(id).then(result => {
        res.send(result);
        res.end();
    }).catch(error=> {
        res.send(error);
        res.end();
    })
});

module.exports = router;