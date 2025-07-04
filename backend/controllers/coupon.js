const CouponRepository = require("../repositories/CouponRepository.js");
const validateCoupon = require("../utils/validateCoupon.js");
//Create Coupon

const createCoupon = async (req, res) => {
  try {
    const { isValid, errors } = validateCoupon(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    const newCoupon = await CouponRepository.create(req.body);
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GetAll Coupon

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await CouponRepository.getAll();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GetCouponByCouponCode

const getCouponByCode = async (req, res) => {
  try {
    const code = req.params.code;
    const coupon = await CouponRepository.getByCode(code);
    if (!coupon) {
      return res.status(404).json("Coupon Bulunamadı ! ");
    }
    const { code: couponCode, _id, discount, expired, count } = coupon;
    res.status(200).json({ code: couponCode, _id, discount, expired, count });
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GetCouponById
const getCouponById = async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const coupon = await CouponRepository.getById(couponId);
    if (!coupon) {
      return res.status(404).json("Coupon Bulunamadı ! ");
    }

    if (coupon.count <= 0) {
      return res.status(400).json("Kupon Tükenmiştir !");
    }

    coupon.count -= 1;
    await coupon.save();

    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

// UPDATE COUPON

const updateCoupon = async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const existingCoupon = await CouponRepository.getById(couponId);
    if (!existingCoupon) {
      return res.status(404).json({ error: "Coupon bulunamadı !" });
    }
    if (existingCoupon.count < 0) {
      return res
        .status(400)
        .json({ error: "Kupon kullanım hakkı kalmamıştır!" });
    }

    const { isValid, errors } = validateCoupon(req.body);
    if (!isValid) {
      return res.status(404).json({ errors });
    }
    const updatedCoupon = await CouponRepository.update(couponId, req.body);
    if (!updatedCoupon) {
      return res.status(404).json({ error: "Coupon bulunamadı !" });
    }
    res.status(200).json(updatedCoupon);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

// Delete Coupon

const deleteCoupon = async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const deletedCoupon = await CouponRepository.delete(couponId);
    if (!deletedCoupon) {
      return res.status(404).json({ error: "Kupon bulunamadı !" });
    }
    res.status(200).json(deletedCoupon);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

module.exports = {
  getAllCoupons,
  getCouponById,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getCouponByCode,
};
