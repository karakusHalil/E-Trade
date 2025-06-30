const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    discount: { type: Number, required: true },
    expired: { type: Date, required: true },
    count: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model("Coupon", CouponSchema);

module.exports = Coupon;
