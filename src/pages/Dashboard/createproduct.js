import { useState } from "react";
import "../../style/createproduct.css";
import { IoArrowBackOutline } from "react-icons/io5";

const CreateProduct = () => {
  const [image, setImage] = useState(null);
  console.log(image);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="create-product-container">
      <div className="create-product-layout">
        <div className="back-button-container">
          <button>
            <IoArrowBackOutline />
            <p>Back</p>
          </button>
        </div>
        <h2>Create New Product</h2>
        <div className="product-form-container">
          <div className="input-field">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Enter product name" />
          </div>
          <div className="input-field">
            <label htmlFor="">Product Category</label>
            <input type="text" placeholder="Enter category" />
          </div>
          <div className="input-field">
            <label htmlFor="">Price</label>
            <input type="text" placeholder="Enter price" />
          </div>

          <div className="image-upload-container">
          <input className="image-input" type="file" accept="image/*" onChange={handleImageChange} />
            <div className="image-container">
           
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ width: "300px", height: "auto" }}
                />
              )}
            </div>
          </div>

          <div className="submit-button-container">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
