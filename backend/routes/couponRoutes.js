const express = require("express");
const router = express.Router();
const coupons = require("../controllers/coupon");

router.get("/", coupons.getAllCoupons);
router.get("/:couponId", coupons.getCouponById);
router.post("/", coupons.createCoupon);
router.put("/:couponId", coupons.updateCoupon);
router.delete("/:couponId", coupons.deleteCoupon);

module.exports = router;
