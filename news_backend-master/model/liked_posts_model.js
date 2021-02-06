var db=require('../db_connection');
var liked={
    AddLikedPosts:function(item,callback){
        return db.query("insert into liked_posts values(?,?,?,?,?)",[item.user_id,item.url_to_image,item.url,item.title,item.description],callback); 
    },
    viewLikedPostsByUserId:function(user_id,callback)
    {
        return db.query("select * from liked_posts where user_id=?",user_id,callback);
    },
    deletePosts:function(user_id,title,callback)
    {
        return db.query("delete from liked_posts where user_id=? and title=?",[user_id,title],callback);
    }
}
module.exports=liked