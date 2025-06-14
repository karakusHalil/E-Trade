const User = require("../models/User");

const UserRepository = {
  getAll: () => User.find(),
  getById: (userId) => User.findById(userId),
  create: (userData) => User.create(userData),
  update: (userId, updateData) =>
    User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }),
  delete: (userId) => User.findByIdAndDelete(id),
};

module.exports = UserRepository;
