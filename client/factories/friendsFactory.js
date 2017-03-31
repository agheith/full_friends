console.log("Friend Factory");

myApp.factory("friendsFactory", ["$http", function($http){
  // constructor for our factory
    var factory = {};
    var friends= [];

    factory.index = function(callback) {
    //call this method if you want to update or set the friends variable
    $http.get('/friends').then(function(returned_data){
    //   console.log("got to $http.get / friends",returned_data.data);
      var friends = returned_data.data;
      callback(friends);
    });
}


    factory.create = function(newFriend, callback){
        console.log("Got to factory.create---",newFriend);
        $http.post("/friends", newFriend).then(function(data){
            console.log(data);
            console.log("got back from the server");
        })
    }

    factory.show = function(fID, callback) {
        // Your code here
        console.log("from show factory");
        $http.get("/friends/" + fID ).then(function(data){
            console.log(data);
            return callback(data.data)
        })
    };

    factory.update = function(friend, fID, callback) {
        console.log("from the update factory");
      $http.put("/friends/" + fID, {first_name: friend.first_name, last_name: friend.last_name, birthday: friend.birthday}).then(function(returned_data) {
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
             callback(returned_data.data);
          }
      })
}

// factory.update = function (friend, idx, callback) {
//     console.log(friend);
//     $http.put('/friends/' + idx, {first_name: friend.first_name, last_name: friend.last_name, birthday: friend.birthday})
//         .then(function (returned_data) {
//         // console.log(returned_data.data);
//         if (typeof(callback) == 'function') {
//             callback(returned_data.data);
//         }
//     })
//
//     factory.update = function(friend, callback) {
//   $http.put('/friends/'+ friend._id, friend).then(function(returned_data) {
//       console.log(returned_data.data);
//       if (typeof(callback) == 'function'){
//         callback(returned_data.data);
//       }
//   })


    factory.delete = function() {
        // Your code here
    }

    return factory;
}])

/*

    factory.createFriend = function(newFriend, callback){
        console.log(newFriend);
        $http.post('/friend/new', newFriend).then(function(created_friend){
            console.log(created_friend);
            console.log("Got back from the server");
            callback(created_friend);
        })
    }

*/
