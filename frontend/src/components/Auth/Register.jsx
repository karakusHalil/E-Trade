import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5100/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("user", JSON.stringify(result));
        // console.log(result);
        //form clear
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        console.log("Kullanıcı kayıt işlemi sırasında hata oluştu !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !", error);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input
              type="text"
              value={formData.username}
              name="username"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy.</a>
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
