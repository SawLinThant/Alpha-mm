import "../../style/login.css"
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
    return(
        <div className="login-container">
            <div className="login-container-layout">
                <div className="login-form-layout">
                    <div className="login-heading">
                        <h2>Login</h2>
                    </div>
                    <form action="">
                        <div className="login-input-field">
                            {/* <label htmlFor="">Email</label> */}
                            <div className="login-input-icon"><TfiEmail size={19} opacity={0.7}/></div>
                            <input type="text" placeholder="Enter email"/>
                        </div>
                        <div className="login-input-field">
                            {/* <label htmlFor="">Password</label> */}
                            <div className="login-input-icon"><RiLockPasswordLine size={19} opacity={0.7}/></div>
                            <input type="text" placeholder="Enter password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;