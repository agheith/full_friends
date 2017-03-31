console.log("futre routes");

var friends = require('./../controllers/friends.js')
var path = require('path')

module.exports = function(app){
app.get('/friends', function(req, res) {
  friends.index(req, res);
});

app.get('/friends/:id', function(req, res) {
  friends.show(req, res);
});

app.post('/friends', function(req, res) {
  friends.create(req, res);
});

app.put('/friends/:id', function(req, res) {
    console.log(req.params.id);
  friends.update(req, res);
});

app.delete('/friends/:id', function(req, res) {
  friends.delete(req, res);
});

}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
