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

const updateUser = (body, id) => {
  const query = `UPDATE mahasiswa 
  SET nim='${body.nim}',
  nama='${body.nama}',
  kelas='${body.kelas}',
  alamat='${body.alamat}'
  WHERE id='${id}'`;
  return dbPool.execute(query);
};

const deleteUser = (id) => {
  const query = `DELETE FROM mahasiswa WHERE id=${id}`;
  return dbPool.execute(query);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
