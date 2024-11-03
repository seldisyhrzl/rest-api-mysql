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

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.json({
      message: "CREATE(POST) New Users",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      serverMessage: error,
    });
  }
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
