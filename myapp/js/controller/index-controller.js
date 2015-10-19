app.controller('indexController', ['$scope', '$resource', 
	function ($scope, $resource) {
	
		var Login = $resource('/login');	

		Login.query(function (results) {
			$scope.todos = results;
		});		

		$scope.userLogin = function () {
			var usrlogin = new Login();
			usrlogin.username = $scope.passUsername;
			usrlogin.password = $scope.passPassword;
			todo.$save(function (result) {
				$scope.todos.push(result);
				$scope.todoTitle = '';
			});
		}

		$scope.remove = function(toDo) {
				
			if (toDo) {
			
				toDo.$remove({id: toDo._id});

				for (var i in $scope.todos) {
					
					if ($scope.todos[i] === toDo) {
						$scope.todos.splice(i, 1);
					}
				}
			} 
			else {
			 	$scope.todos.$remove(function() {
			 		$location.path(Todo);
			 	});
			}
		}

	}
]);
