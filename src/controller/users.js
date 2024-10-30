const getAllUsers = (req, res) => {
  const data = {
    id: 1,
    nama: "Yogres",
    email: "hih@email.com",
    alamat: "Pasirbapang",
  };
  res.json({
    message: "GET All Users",
    data: data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);

  res.json({
    message: "POST New Users",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log("id user:", id);
  res.json({
    message: "Update User Successfull",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Delete User Successfull",
    data: {
      id: id,
      name: "John",
      email: "john@email.com",
      adress: "New York",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
