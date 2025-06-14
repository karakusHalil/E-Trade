const express = require("express");
const router = express.Router();

//Get Routes

const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

//Define Routes path

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
