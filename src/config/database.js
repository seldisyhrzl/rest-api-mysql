const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tutor_dek",
});

module.exports = dbPool.promise();
