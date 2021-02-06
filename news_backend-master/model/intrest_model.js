
var db=require('../db_connection');
var intrest={
    AddIntrest:function(item,callback){
        return db.query("insert into intrest (user_id,cat_id) values(?,?)",[item.user_id,item.cat_id],callback); 
    },
    getIntrestByUserId:function(user_id,callback)
    {
        return db.query("select c.* from intrest i,category c where i.cat_id=c.cat_id and i.user_id=?",[user_id],callback);
    },
    deleteIntrestByUserId:function(user_id,callback)
    {
        return db.query("delete from intrest where user_id=?",[user_id],callback);
    }
};
module.exports=intrest;
    ;