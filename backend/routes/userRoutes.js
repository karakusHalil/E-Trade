const express = require("express");
const route = express.Router();
const users = require("../controllers/users");

router.get("/", users.getAllUsers);
router.get("/:userId", users.getUserById);
router.post("/", users.createUser);
router.put("/:userId", users.updateUser);
router.delete("/:userId", users.deleteUser);

module.exports = route;
