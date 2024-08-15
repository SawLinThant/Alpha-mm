import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";
import StoreAndService from "../components/store-and-service";
import "../style/serviceandstore.css";
import { useEffect } from "react";

const Store = () => {
  const{pathname} = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])
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
