var mongoose = require('mongoose');


var contadorSchema = mongoose.Schema({

	correctas: Number,
	incorrectas: Number	
});

module.exports = mongoose.model('Contador',contadorSchema );