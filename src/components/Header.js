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
              <li className="nav-icon">Home</li>
              <li className="nav-icon">Product</li>
              <li className="nav-icon">About Us</li>
              <li className="nav-icon">Contact Us</li>
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
