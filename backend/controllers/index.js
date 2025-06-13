const express = require("express");
const router = express.Router();

//Get Routes
const categoryRoute = require("./categories");

//Define Routes path

router.use("/categories", categoryRoute);







module.exports = router;
