const { Router } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x=Math.random();
    var y;
    y=req.query.y;
    if(y==undefined){
        y=x;
    }
  res.render('computation', {values: 'f(${y}) is  ${Math.log(y)}' })
})


/* GET home page. */
router.get('/',function(req,res,next){
    res.render('computation',{values: 'f(${y}) is  ${Math.log(y)}'})

    res.end();
});

module.exports = router;