const dbPool = require("../config/database");

const getAllUsers = () => {
  const query = "SELECT * FROM mahasiswa";
  return dbPool.execute(query);
};

const createNewUser = (body) => {
  const query = `INSERT INTO mahasiswa (nim, nama, kelas, alamat)
                 VALUES ('${body.nim}', '${body.nama}', '${body.kelas}', '${body.alamat}')`;
  return dbPool.execute(query);
};

module.exports = {
  getAllUsers,
  createNewUser,
};
