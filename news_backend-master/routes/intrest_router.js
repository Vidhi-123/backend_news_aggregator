var intrest=require('../model/intrest_model');
var express = require('express');
var router = express.Router();

router.get('/:user_id',function(req,res,next){
    console.log(req.params.user_id);
    intrest.getIntrestByUserId(req.params.user_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
         console.log(rows);
     res.json(rows);
     }
    });
  });



  router.delete('/:user_id',function(req,res,next){
    intrest.deleteIntrestByUserId(req.params.user_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
  });



  router.post('/',function(req,res,next){
    console.log(req.body);
    intrest.AddIntrest(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
         console.log(rows);
     res.json(rows);
     }
    });
  });

  module.exports=router;