
console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


module.exports = {
  index: function(req,res){
    //your code here
    Friend.find({}, function(err, results){
        if(err){
            res.json(err);
        } else {
            res.json(results);
        }
    })

},

  create: function(req,res){
    //your code here
    var new_friend = new Friend(req.body);
    new_friend.save(function(err,results){
        if(err){
            res.json(err);
        }else{
            res.json(results);
        }
    })
  },

  update: function(req,res){
    //your code here
    console.log("am i gettin from update server? YES");
    Friend.findOne({_id: req.params.id}, function(err, friend){
        if (err){
            res.json(err)
        } else{
            friend.first_name = req.body.first_name;
            friend.last_name = req.body.last_name;
            friend.birthday = req.body.birthday;
            friend.save( function(err, updated_friend){
                if (err){
                    res.json(err)
                } else {
                    res.json(updated_friend)
                }
            })
        }
    })

  },


  delete: function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  },

  show: function(req,res){
    //your code here
    console.log("am i getting back from friends.js server? YES");
    Friend.findOne({_id: req.params.id}, function(err, results){
        if(err){
            res.json(err);
        } else{
            console.log(results);
            res.json(results);
        }
    })
  }

}
