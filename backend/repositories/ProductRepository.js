const Product = require("../models/Product");

const ProductRepository = {
  getAll: () => Product.find(),
  getById: (productId) => Product.findById(productId),
  create: (productData) => Product.create(productData),
  update: (productId, updateData) =>
    Product.findByIdAndUpdate(productId, updateData, {
      new: true,
      runValidators: true,
    }),
  delete: (productId) => Product.findByIdAndDelete(productId),
};

module.exports = ProductRepository;
