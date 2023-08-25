var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var database = require('./modules/database');


var app = express();

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

var usuariosRouter = require('./routers/usuarios-router');
var directoriosRouter = require('./routers/directorios-router');
var archivosRouter = require('./routers/archivos-router');

app.use('/usuarios', usuariosRouter);
app.use('/directorios', directoriosRouter);
app.use('/archivos', archivosRouter);

app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});