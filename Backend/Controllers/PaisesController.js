var Pais = require('../Models/PaisModel');

exports.getPaises = function(req,res){
	Pais.find({}, function(err,paises){
		if (err) 
			res.send(err);
		res.json(paises);
	});
}

//  Adiciona un nuevo objeto Pais en la base de datos
exports.setPais = function (req, res) {
    Pais.create({
        nombre: req.body.nombre,
        pregunta: req.body.pregunta,
        respuesta1: req.body.respuesta1,
        respuesta2: req.body.respuesta2,
        respuesta3: req.body.respuesta3,
        respuesta4: req.body.respuesta4
    }, function (err, pais) {
        if (err)
            res.send(err);

        Pais.find(function (err, pais) {
            if (err)
                res.send(err);
            res.json(pais);
        });
    });
}

//modificar un objeto pais de la base de datos
exports.updatePais = function(req, res){
    Pais.update({_id: req.params.pais_id},
        {$set: {nombre: req.body.nombre,
                pregunta: req.body.pregunta,
                respuesta1: req.body.respuesta1,
                respuesta2: req.body.respuesta2,
                respuesta3: req.body.respuesta3,
                respuesta4: req.body.respuesta4}}, function(err, pais){
                    if (err)
                        res.send(err);
                    Pais.find(function(err, pais){
                        if (err) 
                            res.send(err);
                        res.json(pais);
                    });
                });
}

//eliminar un pais de la base de datos
exports.removePais = function(req, res){
    Pais.remove( {_id: req.params.pais_id}, function(err, area){
        if (err)
            res.send(err);
        Pais.find(function(err,paises){
            if (err)
                res.send(err);
            res.json(paises);
        });
    });
}