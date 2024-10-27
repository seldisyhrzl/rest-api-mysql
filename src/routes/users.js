const express = require("express");

const router = express.Router();

const UserController = require("../controller/users");

router.get("/", UserController.getAllUsers);

router.post("/", UserController.createNewUser);

module.exports = router;
