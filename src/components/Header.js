import "../style/header.css";
import PhoneIcon from "../modules/icons/phone-iocn"
import AlphaLogo from "../modules/icons/alpha-logo";
import Sidebar from "./mobilenav";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
            <div className="logo">
                <a style={{color:'white'}} href="/"><AlphaLogo width={150} height={56}/></a>
            </div>
        </div>
        <Sidebar/>
        <div className="nav-right">
          <div className="nav-list-container">
            <ul className="nav-list">
              <li className="nav-icon"><a href="/">Home</a></li>
              <li className="nav-icon"><a href="/products">Product</a></li>
              <li className="nav-icon"><a href="/aboutus">About Us</a></li>
              <li className="nav-icon"><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>
          <div className="hotline">
           <a href="tel:+959428694996">
            {/* <PhoneIcon stroke="white"  width={24} height={24}/> */}
            Hotline :<span style={{color:"white"}}>09 428 694 996</span></a> 
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
