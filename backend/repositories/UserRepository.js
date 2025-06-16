const User = require("../models/User");

const UserRepository = {
  getAll: () => User.find(),
  getById: (userId) => User.findById(userId),
  create: (userData) => User.create(userData),
  update: (userId, updateData) =>
    User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    }),
  delete: (userId) => User.findByIdAndDelete(userId),
  getByEmail: (email) => User.findOne({ email }),
};

module.exports = UserRepository;
