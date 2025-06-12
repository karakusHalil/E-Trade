const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    images: { type: Array, default: [] },
    price: { type: Number, default: 0.0 },
    description: { type: String, default: "" },
    colors: { type: Array, default: [] },
    sizes: { type: Array, default: [] },
    stockCode: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
