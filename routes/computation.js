
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var x=Math.random();
    var y;
    y=req.query.y;
    if(y==undefined){
        y=x;
    }
  res.render('computation', {title: `[Math.cos] applied to [${x}] is [${Math.cos(y)}]` })
  res.end();
});


module.exports = router;
