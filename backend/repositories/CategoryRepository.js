const Category = require("../models/Category");

const CategoryRepository = {
  getAll: () => Category.find(),
  getById: (categoryId) => Category.findById(categoryId),
  create: (categoryData) => Category.create(categoryData),
  update: (categoryId, updateData) =>
    Category.findByIdAndUpdate(categoryId, updateData, {
      new: true,
      runValidators: true,
    }),
  delete: (categoryId) => Category.findByIdAndDelete(categoryId),
};

module.exports = CategoryRepository;
