import Footer from "../components/footer";
import Header from "../components/header";
import StoreAndService from "../components/store-and-service";
import "../style/serviceandstore.css";

const Store = () => {
  return (
    <div className="store-page-container">
      <Header />
      <div className="sub-nav-links">
        <div className="sub-nav-links-layout">
          <p>Home</p>
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
