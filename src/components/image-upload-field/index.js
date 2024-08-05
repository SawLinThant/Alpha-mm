import { useRef } from "react";
import "../../style/image-upload.css";
import { LuUpload } from "react-icons/lu";

const ImageUploadField = ({ handleImageChange, imageUrl, image , label,fontsize, size}) => {
    const fileRef = useRef(null);
    const handleContainerClick = () => {
        if(fileRef.current){
            fileRef.current.click();
        }
    }
  return (
    <div className="image-upload-container" onClick={handleContainerClick}>
      <input
        ref={fileRef}
        className="image-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <div className="image-container">
       
        {image? (
            <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "350px", height: "auto" }}
          />
        ):
        (<div className="file-upload-image-icon-container">
            <LuUpload size={size}/>
            <p style={{fontSize: fontsize}}>{label}</p>
        </div>)
        }
      </div>
    </div>
  );
};
export default ImageUploadField;
