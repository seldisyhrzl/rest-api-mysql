const dbPool = require("../config/database");

const getAllUsers = () => {
  const query = "SELECT * FROM mahasiswa";
  return dbPool.execute(query);
};

module.exports = { getAllUsers };
