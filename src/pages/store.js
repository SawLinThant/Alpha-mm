import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";
import StoreAndService from "../components/store-and-service";
import "../style/serviceandstore.css";

const Store = () => {
  const navigate = useNavigate();
  return (
    <div className="store-page-container" style={{backgroundColor:'#B1B3B6'}}>
      <Header />
      <div className="sub-nav-links">
        <div className="sub-nav-links-layout">
          <p onClick={() => navigate('/')}>Home</p>
          <span>/</span>
          <p style={{color:"#4A4CCD" }}>Stores</p>
        </div>
      </div>
      <section className="store-section-container">
        <StoreAndService />
      </section>
      <Footer />
    </div>
  );
};

export default Store;
