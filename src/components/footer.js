import "../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-layout">
          <div className="footer-container-main">
            <div className="location">
              <div className="location-logo"></div>
              <div className="location-description">
                <div className="location-icon"></div>
                <p>
                  No.186/188, Pansodan Middle Block, Kyautada Township,
                  Yangon,Myanmar
                </p>
              </div>
            </div>
            <div className="section-container">
              <div className="section one">
                <h3>Link</h3>
                <ul className="links">
                  <li className="link">Home</li>
                  <li className="link">Products</li>
                  <li className="link">About Us</li>
                  <li className="link">Contact Us</li>
                </ul>
              </div>
              <div className="section two">
                <h3>Call Us</h3>
                <ul className="call-us">
                  <li className="call">01 382 772</li>
                  <li className="call">09 407 146 226</li>
                  <li className="call">09 424 46 693</li>
                </ul>
              </div>
              <div className="section three">
                <h3>Follow Us</h3>
                <ul className="follow-us">
                  <li className="follow">Follow us on Facebook</li>
                  <li className="follow">Follow us on TikTok</li>
                  <li className="follow">Subscribe on YouTube</li>
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
