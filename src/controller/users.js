const router = require("../routes/users");

const getAllUsers = (req, res) => {
  res.json({
    message: "GET All Users",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "POST New Users",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
