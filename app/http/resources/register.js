var express = require('express');
var router = express.Router();
var User = require('mongoose').model('User');

/* GET login form. */
router.post('/', function(req, res) {
  var email = req.getJson('user.email');
  var password = req.getJson('user.password');

  User.create({email, password}, function(err) {
    if (err && err.code === 11000) {
      return res.send('A user already exists with this email.');
    } else if (err) {
      return res.send(err);
    } else {
      res.send('success');
    }
  });
});

module.exports = router;
