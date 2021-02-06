var db=require('../db_connection');
var user={
    getUserByEmailId:function(email_id,callback){
        return db.query("SELECT * FROM user where email_id=?",[email_id],callback); 
    },
    addUser:function(item,callback)
    {
        return db.query("insert into user (first_name,email_id) values (?,?)",[item.first_name,item.email_id],callback); 
    }

};
module.exports=user;