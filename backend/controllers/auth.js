const AuthRepository = require("../repositories/AuthRepository");
const bcrypt = require("bcrypt");

//REGISTER USER START
const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Kullanıcı adı, email ve şifre zorunludur!" });
    }
    //email control
    const existingUser = await AuthRepository.getByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email zaten kullanılıyor !" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await AuthRepository.createUser({
      username,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({
      message: "Kullanıcı Başarıyla oluşturuldu",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//REGISTER USER END

//LOGIN USER START
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthRepository.getByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Email Bulunamadı !" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Yanlış Şifre !" });
    }
    res.status(200).json({
      id: user._id,
      username: user.username,
      password: user.password,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//LOGIN USER END

module.exports = {
  login,
  register,
};
