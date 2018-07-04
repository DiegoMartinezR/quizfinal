var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PaisSchema = new Schema({
	nombre: String,
	pregunta: String,
	respuesta1: String,
	respuesta2: String,
	respuesta3: String,
	respuesta4: String
});

//Nombre del esquema, el esquema, nombre de la coleccion
module.exports = mongoose.model('PaisModel',PaisSchema,'paises');