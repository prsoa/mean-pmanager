var express = require('express');
var router = express.Router();

router.get('/projects', function(req, res, next){
  res.send('PROJECTS API ');
});

module.exports = router;
