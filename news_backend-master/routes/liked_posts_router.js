var liked=require('../model/liked_posts_model');
var express = require('express');
var router = express.Router();

router.get('/:user_id',function(req,res,next){
    console.log(req.params.user_id);
   liked.viewLikedPostsByUserId(req.params.user_id,function(err,rows){
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



  



  router.post('/',function(req,res,next){
    console.log(req.body);
    liked.AddLikedPosts(req.body,function(err,rows){
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








  router.delete('/:user_id/:title',function(req,res,next){
    liked.deletePosts(req.params.user_id,req.params.title,function(err,rows){
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


  module.exports=router;