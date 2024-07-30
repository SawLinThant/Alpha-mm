import { useState } from "react";
import "../../style/createproduct.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../../graphql/mutation/productMutations";
import { Toaster, toast } from "react-hot-toast";
import ImageUploadField from "../../components/image-upload-field";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT);
  const [updateProduct, { data, error }] = useMutation(UPDATE_PRODUCT);
  console.log(image);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0].name);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCreate = handleSubmit(async (credential) => {
    try {
      if (!image) {
        toast("Please upload an image");
      } else {
        await createProduct({
          variables: {
            name: credential.name,
            category: credential.category,
            model: credential.model,
            price: parseInt(credential.price),
            image_url: image,
          },
        });
        toast("Product created");
        console.log("product created");
      }
    } catch (err) {
      toast("Product creation failed");
      throw new Error("error creating product");
    }
  });
  return (
    <>
      <Toaster />
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
            <form action="" onSubmit={handleCreate}>
              <div className="input-field">
                <label htmlFor="">Product Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter product name"
                  {...register("name", {
                    required: "name is required",
                  })}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">Product Category</label>
                <input
                  name="category"
                  type="text"
                  placeholder="Enter category"
                  {...register("category", {
                    required: "categoryis required",
                  })}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  {...register("price", {
                    required: "price is required",
                  })}
                />
              </div>

              <div className="input-field">
                <label htmlFor="">Model</label>
                <input
                  name="model"
                  type="text"
                  placeholder="Enter model"
                  {...register("model", {
                    required: "model is required",
                  })}
                />
              </div>
              <div className="image-upload-field-container">
                <ImageUploadField handleImageChange={handleImageChange} image={image} imageUrl={imageUrl}/>
              </div>
              <div className="submit-button-container">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateProduct;
