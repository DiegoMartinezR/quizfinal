var Controller = require('../Controllers/PaisesController');
var mainDir = "";

module.exports = {
	principal: function(app){
		//obtener todos los paises
		app.get('/api/paises',Controller.getPaises);

		//crear nuevas preguntas
		app.post('/api/pais', Controller.setPais);

		//editar 
		app.put('/api/pais/:pais_id', Controller.updatePais);

		//borrar
		app.delete('/api/pais/:pais_id',Controller.removePais);

		//principal
		app.get('/', function(req,res){
			res.sendFile(mainDir + '/Angular/crud-preguntas.html');
		});
	},

	iniciar: function(mdir){
		mainDir = mdir;
	}
}