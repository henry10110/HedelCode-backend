var mongoose = require('mongoose');

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb+srv://henrygironnavas:BFkUoGkzJQEyUl04@hedelproject.vglvpw8.mongodb.net/hedelcode?retryWrites=true&w=majority`)
        .then(result=>console.log('se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();