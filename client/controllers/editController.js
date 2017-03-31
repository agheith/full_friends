console.log('editController started');

myApp.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, l){
        $scope.friend = {};  //WHY
        var show = function(){
            var fID= $routeParams._id;
            friendsFactory.show(fID, function(returned_data){
                console.log(returned_data);
                $scope.friend = returned_data;
            })
        }
        show();

    $scope.updateFriend = {}; //WHY
    $scope.update = function(){
        console.log('clicked update');
        var fID = $routeParams._id;
        console.log(fID);
        friendsFactory.update($scope.updateFriend, fID, function(data){
            console.log(data);
        });
        l.url('/main')
    }
}])
//
// $scope.updateFriend = {};
// $scope.update = function () {
//     console.log('clicked update');
//     let idx = $routeParams._id;
//     console.log(idx);
//     if (!$scope.updateFriend.first_name || !$scope.updateFriend.last_name || !$scope.updateFriend.birthday) {
//         console.log('missing fields');
//     }
//     else {
//         friendsFactory.update($scope.updateFriend, idx, function () {
//             $scope.updateFriend = null;
//         });
//     }
