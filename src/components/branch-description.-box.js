import "../style/branch-description-box.css";
import DirectionIcon from "../modules/icons/direction";
import LocationIcon from "../modules/icons/location";
import PhoneIcon from "../modules/icons/phone-iocn";

const BrachDescription = ({ name, location, phone }) => {
  return (
    <div className="branch-description">
      <div className="branch-description-text">
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
      </div>
    </div>
  );
};
export default BrachDescription;
