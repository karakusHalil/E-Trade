const User = require("../models/User");

const AuthRepository = {
  getByEmail: (email) => User.findOne({ email }),
  createUser: (userData) => User.create(userData),
};

module.exports = AuthRepository;
