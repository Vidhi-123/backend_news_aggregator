const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "news_aggregator",
  password: ""
});

module.exports=connection
