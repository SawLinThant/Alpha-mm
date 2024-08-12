import AlphaLogo from "../modules/icons/alpha-logo";
import LocationIcon from "../modules/icons/location";
import PhoneIcon from "../modules/icons/phone-iocn";
import RightArrowCircle from "../modules/icons/rignt-arrow-circle";
import FacebookLogo from "../modules/icons/social-icons/facebook";
import TiktokLogo from "../modules/icons/social-icons/tiktok";
import YoutubeLogo from "../modules/icons/social-icons/youtube";
import "../style/footer.css";

const Footer = () => {
  
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-layout">
          <div className="footer-container-main">
            <div className="location">
              <div className="location-layout">
              <div className="location-logo">
              <AlphaLogo width={200} height={75} />
              </div>
              <div className="location-description">
                <div className="location-icon"><LocationIcon color="#9394E0" width={24} height={24}/></div>
                <p>
                  No.186/188, Pansodan Middle Block, Kyautada Township,
                  Yangon,Myanmar
                </p>
              </div>
              </div>
            
            </div>
            <div className="section-container">
              <div className="section one">
                <h3>Link</h3>
                <ul className="links">
                  <li className="link"><RightArrowCircle color="#9394E0" width={20} height={20}/><a href="/">Home</a></li>
                  <li className="link"><RightArrowCircle color="#9394E0"  width={20} height={20}/><a href="/products">Products</a></li>
                  <li className="link"><RightArrowCircle color="#9394E0"  width={20} height={20}/><a href="/aboutus">About Us</a></li>
                  <li className="link"><RightArrowCircle color="#9394E0"  width={20} height={20}/><a href="/contactus">ContactUs</a></li>
                </ul>
              </div>
              <div className="section two">
                <h3>Call Us</h3>
                <ul className="call-us">
                  <li className="call"><PhoneIcon stroke="#9394E0"  width={20} height={20}/>01 382 772</li>
                  <li className="call"><PhoneIcon stroke="#9394E0"  width={20} height={20}/>09 407 146 226</li>
                  <li className="call"><PhoneIcon stroke="#9394E0"  width={20} height={20}/>09 424 46 693</li>
                </ul>
              </div>
              <div className="section three">
                <h3>Follow Us</h3>
                <ul className="follow-us">
                  <li className="follow"><FacebookLogo width={20} height={20}/>Follow us on Facebook</li>
                  <li className="follow"><TiktokLogo width={20} height={20}/>Follow us on TikTok</li>
                  <li className="follow"><YoutubeLogo width={20} height={20}/>Subscribe on YouTube</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-container-bottom">
            <div className="copy-right">
              <p>Copyright© 2024 Alpha Electronic. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
