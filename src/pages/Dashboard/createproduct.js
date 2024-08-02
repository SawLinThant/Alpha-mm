import { useState } from "react";
import "../../style/createproduct.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PRODUCT,
} from "../../graphql/mutation/productMutations";
import { Toaster, toast } from "react-hot-toast";
import ImageUploadField from "../../components/image-upload-field";
import { useNavigate } from "react-router-dom";
import AWS from "aws-sdk";
import CustomDropdown from "../../components/dropdown";


const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT);
  const [category,setCategory] = useState()
  const [subCategory,setSubCategory] = useState()
  const navigate = useNavigate();

  console.log(subCategory)

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const sanitizeFileName = (fileName) => {
    return fileName.replace(/[^a-z0-9.]/gi, "_").toLowerCase();
  };

  const BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
  const REGION = process.env.REACT_APP_AWS_REGION;

  const uploadToS3 = async () => {
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: BUCKET },
      region: REGION,
    });

    const sanatizedImage = sanitizeFileName(image.name);

    const params = {
      Bucket: BUCKET,
      Key: `alpha-myanmar-images/${sanatizedImage}`,
      Body: image,
      ContentType: image.type,
    };

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      console.log("File uploaded successfully.");
    });
  };

  const handleCreate = handleSubmit(async (credential) => {
    try {
      if (!image) {
        toast("Please upload an image");
      } else {
        uploadToS3();
        await createProduct({
          variables: {
            name: credential.name,
            model: credential.model,
            price: parseInt(credential.price),
            category_id: category,
            subcategory_id: subCategory,
            image_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(
              image.name
            )}`,
          },
        });
        toast("Product created");
        // console.log("product created");
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
            <button onClick={() => navigate(-1)}>
              <IoArrowBackOutline />
              <p>Back</p>
            </button>
          </div>
          <h2>Create New Product</h2>
          <div className="product-form-container">
            <form action="" onSubmit={handleCreate}>
              <div className="create-product-form-layout">
                <div className="create-product-form-left">
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
                  <CustomDropdown  isMain={true} setCategory={setCategory} setSubCategory={setSubCategory}/>

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
                </div>
                <div className="create-product-form-right">
                <CustomDropdown  isMain={false} setCategory={setCategory} setSubCategory={setSubCategory}/>
                  <div className="img-btn-container">
                    <div className="image-upload-field-container">
                      <ImageUploadField
                        handleImageChange={handleImageChange}
                        image={image}
                        imageUrl={imageUrl}
                      />
                    </div>
                    
                  </div>
                </div>
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
