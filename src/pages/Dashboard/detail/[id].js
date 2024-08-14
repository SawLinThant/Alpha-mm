import "../../../style/detail.css";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../../graphql/queries/productQueries";
import {
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../../../graphql/mutation/productMutations";
import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import ImageUploadField from "../../../components/image-upload-field";
import CustomDropdown from "../../../components/dropdown";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import LoadingButton from "../../../modules/icons/loading-button";
import AWS from "aws-sdk";
import { prettyDOM } from "@testing-library/react";

const ProductDetail = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME;
  const REGION = process.env.REACT_APP_AWS_REGION;
  const { data, loading } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  const sanitizeFileName = (fileName) => {
    return fileName.replace(/[^a-z0-9.]/gi, "_").toLowerCase();
  };

  const [deleteProduct, { error: deleteError, loading: deleteLoading }] =
    useMutation(DELETE_PRODUCT);

  const handleDelete = async () => {
    try {
      await deleteProduct({
        variables: { id: id },
      });
      navigate("/dashboard", { state: { refetch: true } });
    } catch (err) {
      toast.error("Failed to delete product");
      throw new Error("Error deleting product");
    }
  };

  const toggleDeleteBox = () => {
    setConfirmDelete(!confirmDelete);
  };
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    model: "",
    price: "",
    image_url: "",
    category: {
      id: "",
      category_name: "",
      subcategories: {
        id: "",
        subcategory_name: "",
      },
    },
    subcategory: {
      id: "",
      subcategory_name: "",
    },
    product_specification: "",
    product_description: "",
    sub_img_one_url: "",
    sub_img_two_url: "",
    sub_img_three_url: "",
  });

  useEffect(() => {
    if (data) {
      setProductData(data.product_by_pk);
      setCategory(data.product_by_pk.category.id);
      setSubCategory(data.product_by_pk.subcategory.id);
    }
  }, [data]);

  console.log(subCategory)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [subImageOne, setSubImageOne] = useState(null);
  const [subImageOneUrl, setSubImageOneUrl] = useState(null);

  const [subImageTwo, setSubImageTwo] = useState(null);
  const [subImageTwoUrl, setSubImageTwoUrl] = useState(null);

  const [subImageThree, setSubImageThree] = useState(null);
  const [subImageThreeUrl, setSubImageThreeUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setProductData({
        ...productData,
        image_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(
          e.target.files[0].name
        )}`,
      });
    }
  };

  const handleSubImageTwoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubImageTwo(e.target.files[0]);
      setSubImageTwoUrl(URL.createObjectURL(e.target.files[0]));
      setProductData({
        ...productData,
        sub_img_two_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(
          e.target.files[0].name
        )}`,
      });
    }
  };

  const handleSubImageThreeChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubImageThree(e.target.files[0]);
      setSubImageThreeUrl(URL.createObjectURL(e.target.files[0]));
      setProductData({
        ...productData,
        sub_img_three_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(
          e.target.files[0].name
        )}`,
      });
    }
  };

  const handleSubImageOneChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubImageOne(e.target.files[0]);
      setSubImageOneUrl(URL.createObjectURL(e.target.files[0]));
      setProductData({
        ...productData,
        sub_img_one_url: `https://alpha-myanmar.s3.ap-southeast-1.amazonaws.com/alpha-myanmar-images/${sanitizeFileName(
          e.target.files[0].name
        )}`,
      });
    }
  };

  const uploadToS3 = async (images) => {
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3({
      params: { Bucket: BUCKET },
      region: REGION,
    });

    console.log(images);

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
          console.log(
            "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
          );
        })
        .promise();
    });

    return Promise.all(uploadPromises);
  };

  const [updateProduct, { error, loading: updateLoading }] =
    useMutation(UPDATE_PRODUCT);

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const handleCheckboxChange = () => {
      const inputs = document.querySelectorAll(
        ".edit-form-input-container input"
      );

      const textareas = document.querySelectorAll(
        ".edit-form-input-container textarea"
      );

      const submitButton = document.querySelector(
        ".edit-save-button-container button"
      );
      if (!submitButton || !inputs.length || !textareas.length) return;

      inputs.forEach((input) => {
        if (checkbox.checked) {
          input.classList.add("editable");
          submitButton.classList.add("editable-button");
          setEditable(true);
        } else {
          input.classList.remove("editable");
          submitButton.classList.remove("editable-button");
          setEditable(false);
        }
      });
      textareas.forEach((textarea) => {
        if (checkbox.checked) {
          textarea.classList.add("editable");
          submitButton.classList.add("editable-button");
          //   setEditable(true);
        } else {
          textarea.classList.remove("editable");
          submitButton.classList.remove("editable-button");
          //  setEditable(false);
        }
      });
    };

    const checkbox = document.querySelector(".edit-checkbox");
    if (checkbox) {
      checkbox.addEventListener("change", handleCheckboxChange);
    }

    return () => {
      if (checkbox) {
        checkbox.removeEventListener("change", handleCheckboxChange);
      }
    };
  }, [productData]);

  const handleUpdate = handleSubmit(async (credential) => {
    try {
      const images = [image, subImageOne, subImageTwo, subImageThree].filter(
        Boolean
      );
      uploadToS3(images);
      await updateProduct({
        variables: {
          id: id, // replace with the actual product ID
          name: productData.name,
          model: productData.model,
          price: productData.price,
          image_url: productData.image_url,
         // category_id: productData.category.id,
         category_id: category,
         // subcategory_id: productData.subcategory.id,
         subcategory_id: subCategory,
          product_specification: productData.product_specification,
          product_description: productData.product_description,
          sub_img_one_url: productData.sub_img_one_url,
          sub_img_two_url: productData.sub_img_two_url,
          sub_img_three_url: productData.sub_img_three_url,
        },
      });
      toast("Update Success");
      // window.location.reload();
    } catch (err) {
      throw new Error("Product update failed");
    }
  });

  if (loading)
    return (
      <div className="detail-loading">
        <LoadingButton />
        Loading
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="detail-container">
        <Toaster />
        <div className="detail-container-layout">
          <div
            className={`delete-message-box ${
              confirmDelete ? "open-delete-box" : ""
            }`}
          >
            <div className="delete-box-text">
              {!deleteLoading ? (
                <h2>Are you sure you want to delete this product?</h2>
              ) : (
                <div className="delete-loading-text">
                  <LoadingButton />
                  <p>Deleting Product...</p>
                </div>
              )}
            </div>
            {!deleteLoading ? (
              <div className="delete-box-btn-container">
                <button onClick={handleDelete}>Yes</button>
                <button onClick={toggleDeleteBox}>No</button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div
            className={`detail-description-container ${
              confirmDelete ? "blur-detail-description-container" : ""
            }`}
          >
            <div className="description-header">
              <div
                onClick={() =>
                  navigate("/dashboard", { state: { refetch: true } })
                }
                className="heading-left-container"
              >
                <button>
                  <IoMdArrowRoundBack />
                  back
                </button>
              </div>
              <div className="heading-right-container">
                <button className="delete-btn" onClick={toggleDeleteBox}>
                  <MdDelete />
                  <p>Delete</p>
                </button>
                <input type="checkbox" className="edit-checkbox" />
                <div className="edit-label">
                  <p>Edit Mode</p>
                  <FaEdit />
                </div>
              </div>
            </div>
            <div className="edit-detail-container">
              <div className="description-image-container">
                <div className="description-image-layout">
                  {editable ? (
                    <div className="description-image-layout-container">
                      <div className="update-main-image-container">
                        <ImageUploadField
                          handleImageChange={handleImageChange}
                          image={image}
                          imageUrl={imageUrl}
                          label="Update Image"
                        />
                      </div>

                      <div className="sub-img-update-field">
                        <ImageUploadField
                          handleImageChange={handleSubImageOneChange}
                          image={subImageOne}
                          imageUrl={subImageOneUrl}
                          label="Update Image"
                          fontsize="12px"
                        />
                        <ImageUploadField
                          handleImageChange={handleSubImageTwoChange}
                          image={subImageTwo}
                          imageUrl={subImageTwoUrl}
                          label="Update Image"
                          fontsize="12px"
                        />
                      </div>
                      <div className="sub-img-update-field">
                        <ImageUploadField
                          handleImageChange={handleSubImageThreeChange}
                          image={subImageThree}
                          imageUrl={subImageThreeUrl}
                          label="Update Image"
                          fontsize="12px"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      className="description-detail-image"
                      src={productData.image_url}
                      alt="product image"
                    />
                  )}
                </div>
                {editable ? (
                  <div className="category-field-container">
                    <div className="category-field-container-layout">
                    <CustomDropdown
                      label="Select Category"
                      isMain={true}
                      setCategory={setCategory}
                      setSubCategory={setSubCategory}
                    />
                    <CustomDropdown
                      label="Select Subcategory"
                      isMain={false}
                      setCategory={setCategory}
                      setSubCategory={setSubCategory}
                    />
                    </div>
                    
                  </div>
                ) : (
                  <div className="category-field-container">
                  <div className="category-field-container-layout">
                    <h3>- {productData.category.category_name}<span style={{color:'blueviolet', padding:'0 5px 0 5px'}}>/</span>{productData.subcategory.subcategory_name}</h3>
                  </div>
                  
                </div>
                )}
              </div>
              <div className="description-text-container">
                <div className="description-text-layout">
                  <form action="" className="edit-form" onSubmit={handleUpdate}>
                    <div className="edit-form-input-container">
                      <label htmlFor="">Name</label>
                      <input
                        name="name"
                        type="text"
                        placeholder={productData.name}
                        disabled={!editable}
                        // {...register("name", {
                        //   required: "name is required",
                        // })}
                        value={productData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="edit-form-input-container">
                      <label htmlFor="">Model</label>
                      <input
                        name="model"
                        type="text"
                        placeholder={productData.model}
                        disabled={!editable}
                        // {...register("model", {
                        //   required: "model is required",
                        // })}
                        value={productData.model}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="edit-form-input-container">
                      <label htmlFor="">Price</label>
                      <input
                        name="price"
                        type="number"
                        placeholder={productData.price}
                        disabled={!editable}
                        // {...register("price", {
                        //   required: "price is required",
                        // })}
                        value={productData.price}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="edit-form-input-container textarea-container">
                      <label htmlFor="">Product Description</label>
                      <textarea
                        name="product_description"
                        placeholder={productData.product_description}
                        disabled={!editable}
                        // {...register("price", {
                        //   required: "price is required",
                        // })}
                        value={productData.product_description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="edit-form-input-container  textarea-container">
                      <label htmlFor="">Product Sepcification</label>
                      <textarea
                        name="product_specification"
                        placeholder={productData.product_specification}
                        disabled={!editable}
                        // {...register("price", {
                        //   required: "price is required",
                        // })}
                        value={productData.product_specification}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* <CustomDropdown
                      isMain={false}
                      setCategory={setCategory}
                      setSubCategory={setSubCategory}
                      initialValue={{
                        label: productData.subcategory.subcategory_name,
                        value: productData.subcategory.id
                      }}
                    /> */}
                    <div className="edit-save-button-container">
                      <button type="submit">
                        {updateLoading ? <LoadingButton /> : "Update"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
