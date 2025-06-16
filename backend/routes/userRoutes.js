const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getAllUsers);
router.get("/:userId", users.getUserById);
router.post("/register", users.createUser);
router.post("/login", users.loginUser);
router.put("/:userId", users.updateUser);
router.delete("/:userId", users.deleteUser);
module.exports = router;
