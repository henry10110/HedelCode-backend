var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var usuariosRouter = require('./routers/usuarios-router')

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', usuariosRouter);

app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});