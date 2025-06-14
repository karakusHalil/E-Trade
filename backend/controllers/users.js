const UserRepository = require("../repositories/UserRepository");

//CREATE USER START
const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Kullanıcı adı, email ve şifre zorunludur!" });
    }
    const newUser = await UserRepository.create({
      username,
      email,
      password,
      role,
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      // unique email hatası
      return res.status(400).json({ error: "Bu email zaten kayıtlı!" });
    }
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//CREATE USER END

//GET ALL USERS START
const getAllUsers = async (req, res) => {
  try {
    const users = await UserRepository.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GET ALL USERS END

//GET USER BY ID START
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserRepository.getById(userId);
    if (!user) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GET USER BY ID END

//PUT USER START
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updateUser = req.body;
    const updatedUser = await UserRepository.update(userId, updateUser);
    if (!updatedUser) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı!" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//PUT USER END

//DELETE USER START
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await UserRepository.delete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı!" });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//DELETE USER END

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
