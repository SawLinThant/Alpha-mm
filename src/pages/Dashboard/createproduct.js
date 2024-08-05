import { useState } from "react";
import "../../style/createproduct.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../graphql/mutation/productMutations";
import { Toaster, toast } from "react-hot-toast";
import ImageUploadField from "../../components/image-upload-field";
import { useNavigate } from "react-router-dom";
import AWS from "aws-sdk";
import CustomDropdown from "../../components/dropdown";
import LoadingButton from "../../modules/icons/loading-button";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [subImageOne, setSubImageOne] = useState(null);
  const [subImageOneUrl, setSubImageOneUrl] = useState(null);

  const [subImageTwo, setSubImageTwo] = useState(null);
  const [subImageTwoUrl, setSubImageTwoUrl] = useState(null);


  const [subImageThree, setSubImageThree] = useState(null);
  const [subImageThreeUrl, setSubImageThreeUrl] = useState(null);

  const [createProduct, { loading:createLoading }] = useMutation(CREATE_PRODUCT);
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const navigate = useNavigate();

  const resetFormFields = () => {
    // Reset form inputs
    reset();

    // Reset image states
    setImage(null);
    setImageUrl(null);
    setSubImageOne(null);
    setSubImageOneUrl(null);
    setSubImageTwo(null);
    setSubImageTwoUrl(null);
    setSubImageThree(null);
    setSubImageThreeUrl(null);

    // Reset dropdown states
    setCategory(null);
    setSubCategory(null);
  };

  console.log(subCategory);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubImageOneChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubImageOne(e.target.files[0]);
      setSubImageOneUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubImageTwoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubImageTwo(e.target.files[0]);
      setSubImageTwoUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubImageThreeChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubImageThree(e.target.files[0]);
      setSubImageThreeUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const sanitizeFileName = (fileName) => {
    return fileName.replace(/[^a-z0-9.]/gi, "_").toLowerCase();
  };

  const BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
  const REGION = process.env.REACT_APP_AWS_REGION;

  // const uploadToS3 = async () => {
  //   AWS.config.update({
  //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  //   });

  //   const s3 = new AWS.S3({
  //     params: { Bucket: BUCKET },
  //     region: REGION,
  //   });

  //   const sanatizedImage = sanitizeFileName(image.name);

  //   const params = {
  //     Bucket: BUCKET,
  //     Key: `alpha-myanmar-images/${sanatizedImage}`,
  //     Body: image,
  //     ContentType: image.type,
  //   };

  //   var upload = s3
  //     .putObject(params)
  //     .on("httpUploadProgress", (evt) => {
  //       console.log(
  //         "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
  //       );
  //     })
  //     .promise();

  //   await upload.then((err, data) => {
  //     console.log(err);
  //     console.log("File uploaded successfully.");
  //   });
  // };

  const uploadToS3 = async (images) => {
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: BUCKET },
      region: REGION,
    });

    const uploadPromises = images.map((image) => {
      const sanitizedImage = sanitizeFileName(image.name);

      const params = {
        Bucket: BUCKET,
        Key: `alpha-myanmar-images/${sanitizedImage}`,
        Body: image,
        ContentType: image.type,
      };

      return s3
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          console.log("Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%");
        })
        .promise();
    });

    return Promise.all(uploadPromises);
  };

  const handleCreate = handleSubmit(async (credential) => {
    
    try {
      const images = [image, subImageOne, subImageTwo, subImageThree].filter(Boolean);
    if (images.length < 4) {
      toast("Please upload at least four images");
      return;
    }else {
        uploadToS3(images);
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
            product_specification: credential.specification,
            product_description:  credential.description,
            sub_img_one_url:`https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(subImageOne.name)}` ,
            sub_img_two_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(subImageTwo.name)}`,
            sub_img_three_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(subImageTwo.name)}`
          },
        });
       toast("Product created");
       resetFormFields();
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
          <div className="create-form-heading">
          <div className="back-button-container">
            <button onClick={() => navigate("/dashboard",{ state: { refetch: true } })}>
              <IoArrowBackOutline />
              <p>Back</p>
            </button>
          </div>
          <h2>Create New Product</h2>
          </div>
          <div className="product-form-container">
            <form action="" onSubmit={handleCreate}>
              <div className="create-product-form-layout">
                <div className="create-product-form">
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
                  <CustomDropdown
                  label="Select Category"
                    isMain={true}
                    setCategory={setCategory}
                    setSubCategory={setSubCategory}
                  />

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
                <div className="form-divider"></div>
                <div className="create-product-form">
                  <CustomDropdown
                  label="Select Subcategory"
                    isMain={false}
                    setCategory={setCategory}
                    setSubCategory={setSubCategory}
                  />
                  <div className="input-field">
                    <label htmlFor="">product Description</label>
                    <textarea
                      name="description"
                      type="text"
                      placeholder="Enter Product Description"
                      {...register("description", {
                        required: "description is required",
                      })}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="">product Sepcification</label>
                    <textarea
                      name="specification"
                      type="text"
                      placeholder="Enter Product Specification"
                      {...register("specification", {
                        required: "dspecification is required",
                      })}
                    />
                  </div>
                </div>
                <div className="form-divider"></div>
                <div className="create-product-form-img-upload">
                  <div className="img-btn-container">
                    <div className="image-upload-field-container">
                      <ImageUploadField
                        handleImageChange={handleImageChange}
                        image={image}
                        imageUrl={imageUrl}
                        label="Main Image"
                        size={40}
                      />
                    </div>
                  </div>
                  <div className="sub-image-upload-container">
                    <div className="sub-image-upload-container-layout">
                    <ImageUploadField
                        handleImageChange={handleSubImageOneChange}
                        image={subImageOne}
                        imageUrl={subImageOneUrl}
                        label="Side Image"
                        fontsize="10px"
                        size={25}
                      />
                    </div>
                    <div className="sub-image-upload-container-layout">
                    <ImageUploadField
                        handleImageChange={handleSubImageTwoChange}
                        image={subImageTwo}
                        imageUrl={subImageTwoUrl}
                         label="Side Image"
                         fontsize="10px"
                         size={25}
                      />
                    </div>
                  </div>

                  <div className="sub-image-upload-container">
                    <div className="sub-image-upload-container-layout">
                    <ImageUploadField
                        handleImageChange={ handleSubImageThreeChange}
                        image={subImageThree}
                        imageUrl={subImageThreeUrl}
                         label="Side Image"
                         fontsize="10px"
                         size={25}
                      />
                    </div>
                    <div className="sub-image-upload-container-layout"></div>
                  </div>
                </div>
              </div>
              <div className="submit-button-container">
                <button type="submit">{createLoading?(<LoadingButton/>):"Submit"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateProduct;
