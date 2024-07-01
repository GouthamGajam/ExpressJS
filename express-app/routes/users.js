var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("user",{ title:"This is users page", message:"Users list"});
});

module.exports = router;
