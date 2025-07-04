const express = require("express");
const router = express.Router();

//Get Routes

const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const couponRoutes = require("./couponRoutes");
//Define Routes path

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/coupons", couponRoutes);

module.exports = router;
