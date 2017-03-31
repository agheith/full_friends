myApp.controller('newController', ['$scope','friendsFactory', "$location", "$filter", function($scope, friendsFactory, l, filter) {

  $scope.create = function() {
      $scope.newFriend.birthday = filter('date')($scope.newFriend.birthday,'MM/dd/yyyy');
      friendsFactory.create($scope.newFriend, function(data) {
          // If we needed to display an updated list of friends on this page, we would have to do this;
        //   $scope.friends = data;
      })
      l.url('/main')
  }
}]);
