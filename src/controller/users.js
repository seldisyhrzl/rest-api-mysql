const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "GET All Users",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      serverMessage: error,
    });
  }
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
