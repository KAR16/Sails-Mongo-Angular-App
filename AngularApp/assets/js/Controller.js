var app = angular.module('userList', []);
app.controller('myCtl', function ($scope, $http){
	$http({method: 'POST', url: '/user/list'}).success(function(data) {
	$scope.posts = data;
	console.log(data);
});

});