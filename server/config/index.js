const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'myproject_db'
});

console.log("running mysql.createConnection")
 
module.exports = {
  connection
}