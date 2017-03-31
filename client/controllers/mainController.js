myApp.controller('mainController', ['$scope','friendsFactory', function($scope, friendsFactory) {
  var index = function () {
      friendsFactory.index(function(data) {
          console.log(data);
          $scope.friends = data;
      })
  }
  index();

}]);
