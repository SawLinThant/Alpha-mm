import "../style/branch-description-box.css";
import DirectionIcon from "../modules/icons/direction";
import LocationIcon from "../modules/icons/location";
import PhoneIcon from "../modules/icons/phone-iocn";
import RightArrrow from "../modules/icons/rightarrow";
import { useNavigate } from "react-router-dom";

const BrachDescription = ({ name, buttontext, phone, img_url,route }) => {
  const navigate = useNavigate();
  return (
   
    <div
      className="branch-description"
      style={{
        backgroundImage: `url(${img_url})`,
      }}
    >
      {/* <div className="branch-description-text">
        <div className="branch-description-text-layout">
          <div className="branch-heading-container">
            <h3 className="branch-name">{name}</h3>
            <div className="go-link">
              {" "}
              <DirectionIcon width={24} height={24} stroke="#4A4CCD" />{" "}
            </div>
          </div>
          <div className="branch-location-container">
            <div className="branch-location-logo-container">
              <LocationIcon width={24} height={24} />
            </div>

            <p className="branch-location">{location}</p>
          </div>

          <div className="branch-phone-container">
            <PhoneIcon width={24} height={24} />
            <p className="branch-phone-no">{phone}</p>
          </div>
        </div>
      </div> */}
      <div className="branch-description-text">
        <div className="branch-description-text-layout">
        <p>{name}</p>
        <button onClick={() => navigate(route)}>
          {buttontext}
          <RightArrrow width={24} height={24} />
        </button>
        </div>
       
      </div>
    </div>
  );
};
export default BrachDescription;
