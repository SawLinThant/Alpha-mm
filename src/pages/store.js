import Footer from "../components/footer";
import Header from "../components/header";
import StoreAndService from "../components/store-and-service";
import "../style/serviceandstore.css"

const Store = () => {
    return (
      <div className="store-page-container">
        <Header/>
        <section className="store-section-container">
            <StoreAndService/>
        </section>
        <Footer/>
      </div>
    );
  };
  
  export default Store;
  