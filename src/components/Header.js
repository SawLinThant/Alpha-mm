import "../style/header.css";
import PhoneIcon from "../modules/icons/phone-iocn"
import AlphaLogo from "../modules/icons/alpha-logo";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
            <div className="logo">
                <AlphaLogo width={150} height={56}/>
            </div>
        </div>
        <div className="nav-right">
          <div className="nav-list-container">
            <ul className="nav-list">
              <li className="nav-icon"><a href="/">Home</a></li>
              <li className="nav-icon"><a href="products">Product</a></li>
              <li className="nav-icon"><a href="aboutus">About Us</a></li>
              <li className="nav-icon"><a href="contactus">Contact Us</a></li>
            </ul>
          </div>
          <div className="hotline">
           <p><PhoneIcon stroke="white"  width={24} height={24}/>Hotline:<span>01 235 678</span></p> 
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
