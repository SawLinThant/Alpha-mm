import Footer from "../components/footer";
import Header from "../components/header";
import "../style/serviceandstore.css"
import ClockIcon from "../modules/icons/clock";
import DirectionIcon from "../modules/icons/direction";
import LocationIcon from "../modules/icons/location";
import PhoneIcon from "../modules/icons/phone-iocn";

const Service = () => {
  return (
    <div className="service-page-container">
        <Header/>
        <div className="sub-nav-links">
        <div className="sub-nav-links-layout">
          <p>Home</p>
          <span>/</span>
          <p style={{color:"#4A4CCD" }}>Service Centers</p>
        </div>
      </div>
      <section className="service-section-container">
      <div className="storeandservice-container">
            <div className="storeandservice-layout">
                <h1>Our Services</h1>
                <div className="store-service-description-container">
                    <div className="store-service-description">
                        <div className="store-service-description-img-container">
                            <img src="/storeandservice.png" alt="storeandservice" />
                        </div>
                        <div className="store-service-description-text">
                            <h4>Alpha Electronics Service Center Yangon</h4>
                            <div className="store-service-detail-text">
                               <ClockIcon width={24} height={24}/> <p>Opening Time : 9 AM to 7 PM</p>
                            </div>
                            <div className="store-service-detail-text">
                                <PhoneIcon width={24} height={24}/>
                                <p>09 884 888 693</p>
                            </div>
                            <div className="store-service-detail-text">
                               <div><LocationIcon width={24} height={24}/></div> 
                                <p>အမှတ် 390, 391၊ ယမုံနာ (၁) လမ်း၊ (၂) ရပ်ကွက်၊ ဒေါပုံမြို့နယ်၊ ရန်ကုန်မြို့။</p>
                            </div>
                        </div>
                        <div className="store-service-btn-container">
                            <button> <p>Get Direction</p> <DirectionIcon width={24} height={24}/></button>
                        </div>
                    </div>
                    <div className="store-service-description">
                    <div className="store-service-description-img-container">
                            <img src="/storeandservice.png" alt="storeandservice" />
                        </div>
                        <div className="store-service-description-text">
                            <h4>Alpha Electronics Service Center Mandalay</h4>
                            <div className="store-service-detail-text">
                               <ClockIcon width={24} height={24}/> <p>Opening Time : 9 AM to 7 PM</p>
                            </div>
                            <div className="store-service-detail-text">
                                <PhoneIcon width={24} height={24}/>
                                <p>09 884 888 693</p>
                            </div>
                            <div className="store-service-detail-text">
                            <div><LocationIcon width={24} height={24}/></div>
                                <p>အမှတ် D, 78 လမ်း၊ 29 x 30 ကြား လော်ဂျာဆိုင်ကယ် အပိုပစ္စည်း ဆိုင်ဘေး ဘူတာကြီးရှေ့၊ မန္တလေးမြို့။</p>
                            </div>
                        </div>
                        <div className="store-service-btn-container">
                            <button> <p>Get Direction</p> <DirectionIcon width={24} height={24}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Service;
