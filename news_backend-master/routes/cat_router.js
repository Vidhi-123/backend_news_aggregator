var cat=require('../model/cat_model');
var express = require('express');
var router = express.Router();

router.get('/:cat_id?',function(req,res,next){
    if(req.params.cat_id)
    {
    console.log(req.body);
    cat.GetCateogryById(req.params.cat_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
         console.log(rows);
     res.json(rows);
     }
    });
  }
  else{
      cat.getAllCateogry(function(err,rows)
      {
          if(err)
          {
              res.json(err)
          }
          else{
              res.json(rows)
          }
      });
  }
})
  router.post('/',function(req,res,next){
      cat.InsertCat(req.body,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }
      })
  })

  router.put('/:cat_id',function(req,res,next){
      console.log(req.body)
      cat.UpdateCat(req.body,req.params.cat_id,function(err,rows){
          if(err)
          {
              res.json(err)
          }
          else{
              res.json(rows)
          }
      })
  })

  router.delete('/:cat_id',function(req,res,next){
      cat.DeleteCat(req.params.cat_id,function(err,rows){
          if(err)
          {
              res.json(err)
          }
          else{
              res.json(rows)
          }
      })
  })

  module.exports=router;