var express = require('express');
var router = express.Router();
var Price=require('../model/PriceSchema');

/* GET home page. */
router.get('/', (req, res)=> {//landing page for prices
    Price.find({},(err,results)=>
    {
       if (err) res.send(err);
       else res.send(results);
    });
});

router.post('/create',(req,res)=>  //creates a new item using a post method.
{
    Price.create(req.body,(err,results)=>
    {
       if (err) res.send(err);
       else res.send(results);
    });
});


router.get('/find',(req,res)=>
{
    Price.findOne({productID:req.body.productID},(err,results)=>
    {
        if (err) res.send(err);
        else res.send(results);
    })
});






module.exports = router;
