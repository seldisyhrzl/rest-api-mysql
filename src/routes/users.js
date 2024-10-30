const express = require("express");

const router = express.Router();

const UserController = require("../controller/users");

router.post("/", UserController.createNewUser);

router.get("/", UserController.getAllUsers);

router.patch("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
