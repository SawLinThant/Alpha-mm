import "../style/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
            <div className="logo">
                <h2>Alpha Myanmar</h2>
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
           <p>Hotline:<span>01 235 678</span></p> 
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
