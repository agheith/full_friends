console.log("show controller started");
myApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
    var show = function(){
        var fID= $routeParams._id;
        friendsFactory.show(fID, function(returned_data){
            console.log(returned_data);
            $scope.friend = returned_data;
        })
    }
    show();
}]);
