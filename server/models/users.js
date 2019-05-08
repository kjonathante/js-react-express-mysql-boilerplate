const { connection } = require("../config");

const get = (id, cb) => {
  connection.query("SELECT * FROM users WHERE id=?", [id], function(error, results, fields) {
    if (error) 
      return cb(error)
    console.log(results)
    return cb(null, results)
  });
};

module.exports = {
  get
}