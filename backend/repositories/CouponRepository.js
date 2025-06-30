const Coupon = require("../models/Coupon");

const CouponRepository = {
  getAll: () => Coupon.find(),
  getByCode: (code) => Coupon.findOne({code}),
  getById: (couponId) => Coupon.findById(couponId),
  create: (couponData) => Coupon.create(couponData),
  update: (couponId, updateData) =>
    Coupon.findByIdAndUpdate(couponId, updateData, {
      new: true,
      runValidators: true,
    }),
  delete: (couponId) => Coupon.findByIdAndDelete(couponId),
};

module.exports = CouponRepository;
