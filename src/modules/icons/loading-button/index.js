import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./index.css"

const LoadingButton = ({size}) => {
  return (
    <div>
      <AiOutlineLoading3Quarters size={size} className="rotate"/>
    </div>
  );
};
export default LoadingButton;
