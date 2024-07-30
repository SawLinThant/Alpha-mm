import "../../style/login.css";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userData);
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      userData.email !== "alphamyanmar@gmail.com" ||
      userData.password !== "alphamyanmar123"
    ) {
      console.log("wrong credentials");
    } else {
      setIsLogin(true);
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  return (
    <div className="login-container">
      <div className="login-container-layout">
        <div className="login-form-layout">
          <div className="login-heading">
            <h2>Login</h2>
          </div>
          <form action="">
            <div className="login-input-field">
              {/* <label htmlFor="">Email</label> */}
              <div className="login-input-icon">
                <TfiEmail size={19} opacity={0.7} />
              </div>
              <input
                name="email"
                type="text"
                placeholder="Enter email"
                //  defaultValue={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-input-field">
              {/* <label htmlFor="">Password</label> */}
              <div className="login-input-icon">
                <RiLockPasswordLine size={19} opacity={0.7} />
              </div>
              <input
                name="password"
                type="text"
                placeholder="Enter password"
                //  defaultValue={userData.email}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
