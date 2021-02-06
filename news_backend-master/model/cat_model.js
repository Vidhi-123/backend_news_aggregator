
var db=require('../db_connection');
var cat={
    getAllCateogry:function(callback){
        return db.query("SELECT * FROM category",callback); 
        },
        InsertCat:function(item,callback)
        {
            return db.query("insert into category (cat_id,category_name,cat_img) values(?,?,?)",[item.cat_id,item.category_name,item.cat_img],callback)
        },
        UpdateCat:function(item,cat_id,callback)
        {
            return db.query("update category set category_name=?,cat_img=? where cat_id=?",[item.category_name,item.cat_img,cat_id],callback)
        },
        GetCateogryById(cat_id,callback)
        {
            return db.query("select * from category where cat_id=?",[cat_id],callback);
        },
        DeleteCat:function(cat_id,callback)
        {
            return db.query("delete from category where cat_id=?",[cat_id],callback)
        }
};
module.exports=cat;