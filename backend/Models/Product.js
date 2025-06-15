const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: Array, default: [] },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: "" },
    colors: { type: Array, default: [] },
    sizes: { type: Array, default: [] },
    stockCode: { type: String, required: true, unique: true },
    discount: { type: Number, default: 0.0, max: 100 },
    isActive: { type: Boolean, default: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
