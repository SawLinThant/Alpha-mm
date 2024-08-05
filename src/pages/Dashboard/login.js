import "../../style/login.css";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = ({ setIsLogin }) => {
  const {handleSubmit,register} = useForm();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userData);
 

  const navigate = useNavigate();

  // const handleLogin = handleSubmit(async(credentials) => {
  //   if (
  //     userData.email !== "alphamyanmar@gmail.com" ||
  //     userData.password !== "alphamyanmar123"
  //   ) {
  //     toast.error("Wrong email or password")
  //     console.log("wrong credentials");
  //   } else {
  //     setIsLogin(true);
  //     navigate("/dashboard");
  //     localStorage.setItem("user", JSON.stringify(userData));
  //   }
  // };

  const handleLogin = handleSubmit(async(credentials) => {
    try{
        if(
          credentials.email !== "alphamyanmar@gmail.com" || credentials.password !=="alphamyanmar123"
        ){
          toast.error("Wrong email or password")
        }

        if(credentials.email === "alphamyanmar@gmail.com" & credentials.password ==="alphamyanmar123"){
         
          //const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const updatedUserData = ({
            email: credentials.email,
            password: credentials.password,
          })
          setUserData(updatedUserData)
          setIsLogin(true);
          localStorage.setItem("user", JSON.stringify(userData));
          navigate('/dashboard')
        }
    }catch(err){
      throw new Error("error logging in")
    }
  })

  return (
    <div className="login-container">
      <Toaster/>
      <div className="login-container-layout">
        <div className="login-form-layout">
          <div className="login-heading">
            <h2>Login</h2>
          </div>
          <form action="" onSubmit={ handleLogin}>
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
               // onChange={handleChange}
                {...register("email", {
                  required: "email is required",
                })}
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
                //onChange={handleChange}
                {...register("password", {
                  required: "password is required",
                })}
              />
            </div>
            <button 
            type="submit" 
           // onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
