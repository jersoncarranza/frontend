(function () {
		
	angular.module('controllers', [])
		.controller("PostsCtrl", function($scope, $http) {
		  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
		  $http.get('http://127.0.0.1:7000/files/list/').
		    success(function(data, status, headers, config) {
		        $scope.posts = data;
		        console.log(data);
		    });
		})

		.controller("Fisica", function($scope, $http) {
		  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
		  console.log('fisica');
		  $http.get('http://127.0.0.1:7000/files/list').
		    success(function(data, status, headers, config) {
		        $scope.posts = data;
		        console.log(data);
		    });
		})

		.controller('TabsController', ['$scope', function ($scope) {
		$scope.tab = 1 ;
			$scope.selectTab = function (tab) {
			$scope.tab = tab;
			};

			$scope.isActive = function (tab){
				return tab === $scope.tab;
			}
		}])

	/*	.controller('FilterController', ['filterFilter', function(filterFilter) {
			
			this.filteredArray = filterFilter(this.array, 'a');
  			}])*/

		.controller('TabI', function () {//tab de item
		this.tab = 0;
			this.selectTab = function (tab) {
			this.tab = tab;
			};
		});

})();