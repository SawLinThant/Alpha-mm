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
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
    >
      <div className="branch-description-text">
        <div className="branch-description-text-layout">
        <p>{name}</p>
        <button onClick={() => navigate(route)}>
         <p style={{
          fontSize:'16px',
          fontWeight:'400',
          lineHeight:'24px'
         }}>{buttontext}</p> 
          <RightArrrow width={24} height={24} />
        </button>
        </div>
       
      </div>
    </div>
  );
};
export default BrachDescription;
