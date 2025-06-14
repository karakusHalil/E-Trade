const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: Array, default: [] },
    price: { type: Number, require: true, min: 0 },
    description: { type: String, default: "" },
    colors: { type: Array, default: [] },
    sizes: { type: Array, default: [] },
    stockCode: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
