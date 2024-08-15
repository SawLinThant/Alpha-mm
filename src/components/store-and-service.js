import { useNavigate } from "react-router-dom";
import ClockIcon from "../modules/icons/clock";
import DirectionIcon from "../modules/icons/direction";
import LocationIcon from "../modules/icons/location";
import PhoneIcon from "../modules/icons/phone-iocn";



const StoreAndService = () => {
    const navigate = useNavigate();
    return(
        <div className="storeandservice-container">
            <div className="storeandservice-layout">
                <h1>Our Stores</h1>
                <div className="store-service-description-container">
                    <div className="store-service-description">
                        <div className="store-service-description-img-container">
                            <img src="/storeandservice.png" alt="storeandservice" />
                        </div>
                        <div className="store-service-description-text">
                            <h4>Alpha Electronic Store 1</h4>
                            <div className="store-service-detail-text">
                               <ClockIcon width={24} height={24}/> <p>Opening Time : 9 AM to 7 PM</p>
                            </div>
                            <div className="store-service-detail-text">
                                <PhoneIcon width={24} height={24}/>
                                <p>09 422 618 500</p>
                            </div>
                            <div className="store-service-detail-text">
                                <LocationIcon width={24} height={24}/>
                                <p>Sanyeiknyein Gamone Pwint Shopping Mall</p>
                            </div>
                        </div>
                        <div className="store-service-btn-container">
                            <button onClick={() => navigate('/contactus')}> <p>Get Direction</p> <DirectionIcon width={24} height={24}/></button>
                        </div>
                    </div>
                    <div className="store-service-description">
                    <div className="store-service-description-img-container">
                            <img src="/storeandservice.png" alt="storeandservice" />
                        </div>
                        <div className="store-service-description-text">
                            <h4>Alpha Electronic Store 1</h4>
                            <div className="store-service-detail-text">
                               <ClockIcon width={24} height={24}/> <p>Opening Time : 9 AM to 7 PM</p>
                            </div>
                            <div className="store-service-detail-text">
                                <PhoneIcon width={24} height={24}/>
                                <p>09 422 618 500</p>
                            </div>
                            <div className="store-service-detail-text">
                                <LocationIcon width={24} height={24}/>
                                <p>North Okkalapa Tsp</p>
                            </div>
                        </div>
                        <div className="store-service-btn-container">
                            <button onClick={() => navigate('/contactus')}> <p>Get Direction</p> <DirectionIcon width={24} height={24}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreAndService;