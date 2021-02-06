var user=require('../model/user_model');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    console.log(req.body);
    user.addUser(req.body,function(err,rows){
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
  router.get('/:email_id',function(req,res,next){
      user.getUserByEmailId(req.params.email_id,function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else{
            console.log(rows);
        res.json(rows);
        }
      })
  })
  module.exports=router;