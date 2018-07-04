angular.module('MainApp',[])

function controladorPrincipal($scope,$http){
	$scope.paises = {};

	$scope.newPais = {};

	$http.get('/api/paises').success( function(data){
		$scope.paises = data;
	}).error( function(data){
		console.log('Error: '+ data);
	});

	//agregar nuevo pais
	$scope.registrarPais = function() {
		$http.post('/api/pais', $scope.newPais)
		.success( function(data){
			$scope.newPais={};
			$scope.paises = data;
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	//extraer objeto de la tabla
	$scope.selectPais = function(pais){
		$scope.newPais = pais;
		$scope.selected = true;
		console.log($scope.newPais, $scope.selected);
	};

	//editar
	$scope.modificarPais = function(newPais){
		$http.put('/api/pais/'+$scope.newPais._id, $scope.newPais)
			.success(function(data){
				$scope.newPais = {};
				$scope.paises = data;
				$scope.selected = false;
			})
			.error(function(data){
				console.log('Error: '+ data);
			});
	}

	//eliminar
	$scope.borrarPais = function(newPais){
		$http.delete('/api/pais/'+$scope.newPais._id)
		.success( function(data){
			$scope.newPais = {};
			$scope.paises = data;
			$scope.selected = false;
		})
		.error( function(data){
			console.log('Error: '+data);
		});
	};

















}