const AuthRepository = require("../repositories/AuthRepository");

//LOGIN USER START
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthRepository.getByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Email Bulunamadı !" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Yanlış Şifre Girdiniz !" });
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
};
