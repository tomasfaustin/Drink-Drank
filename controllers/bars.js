var Bar  = require('../models/bar'),
    User = require('../models/user');

function createBar(req, res) {
  User.findById(req.user._id, function(err, user) {
    if (err) throw err;

    user.bars.push({
      name      : req.body.name,
      image_url : req.body.image_url,
      location  : req.body.location,
      address   : req.body.address 
    });

    user.save(function(err, user) {
      if (err) throw err;

      res.redirect('/index');
    });

  });
}

function updateBar(req, res) {
  var id = req.params.id;

  User.findById(req.user._id, function(err, user) {
    if (err) throw err;
    
    var bar = user.bars.id(id);

    bar.visited = !bar.visited;
    user.save(function(err, updatedUser) {
      if (err) throw err;
      var updatedBar = updatedUser.bars.id(id);
      res.json(updatedBar);
    });

  });
}

function deleteBar(req, res) {
  var id     = req.params.id,
      userId = req.user._id;

  User.findById(userId, function(err, user) {
    if (err) throw err;

    var bar = user.bars.id(id);

    user.bars.pull(id);
    user.save(function(err, updatedUser) {
      if (err) throw err;

      res.json({message: 'Bar deleted from User'});
    })
  })
}

module.exports = {
  createBar: createBar,
  updateBar: updateBar,
  deleteBar: deleteBar
}
