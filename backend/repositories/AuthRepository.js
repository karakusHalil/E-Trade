const User = require("../models/User");

const AuthRepository = {
  getByEmail: (email) => User.findOne({ email }),
};

module.exports = AuthRepository;
