var Bar  = require('../models/bar'),
    User = require('../models/user');


// function index(req, res) {
//     User.find({}, function(err, bars) {
//         if (err) throw err;
//
//         res.json(bars);
//     });
// }

function createBar(req, res) {
    console.log('req.body is', req.body);
    console.log(req.user);
    User.findById(req.user._id, function(err, user) {
        if (err) throw err;

        console.log(user);
        user.bars.push({
            name: req.body.name,
            image_url: req.body.image_url,
            location: req.body.location
        })

        user.save(function(err, user) {
            if (err) throw err;

            res.redirect('/index');
        })
    })


    // var newBar = new Bar(req.body);

    // newBar.save(function(err, savedBar) {
    //     if (err) throw err;

    //     res.json(savedBar);
    // });
}

function updateBar(req, res) {
  var id = req.params.id;
  console.log(req.user)
  User.findById(req.user._id, function(err, user) {
    if (err) throw err
  var bar = user.bars.id(id)
  console.log(bar)
    // Bar.findById(id, function(err, bar) {
    //   if (err || !bar) throw err

      bar.visited = !bar.visited
      user.save(function(err, updatedUser) {
        if (err) throw err
        var updatedBar = updatedUser.bars.id(id)
        res.json(updatedBar)
        console.log("Updated?")
      })
    // })
  })
}

function deleteBar(req, res) {
  var id = req.params.id;

  User.findById(req.user._id, function(err, user) {
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
