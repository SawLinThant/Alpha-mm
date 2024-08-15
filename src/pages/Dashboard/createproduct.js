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
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { uploadToDigitalOcean } from "../../utils/s3Service";
import { CREATE_CATEGORY,CREATE_SUBCATEGORY } from "../../graphql/mutation/productMutations";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { register: registerCategory, handleSubmit: handleSubmitCategory, reset: resetCategory } = useForm(); // Category form
  const { register: registerSubcategory, handleSubmit: handleSubmitSubcategory, reset: resetSubcategory } = useForm(); // Subcategory form

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [subImageOne, setSubImageOne] = useState(null);
  const [subImageOneUrl, setSubImageOneUrl] = useState(null);

  const [subImageTwo, setSubImageTwo] = useState(null);
  const [subImageTwoUrl, setSubImageTwoUrl] = useState(null);

  const [subImageThree, setSubImageThree] = useState(null);
  const [subImageThreeUrl, setSubImageThreeUrl] = useState(null);

  const [openForm, setOpenForm] = useState(false);

  const [createCategory,{error:createcategoryError, loading:createCategoryLoading}] = useMutation(CREATE_CATEGORY);
  const [createSubCategory,{error:createSubcategoryError, loading:createSubcategoryLoading}] = useMutation(CREATE_SUBCATEGORY);

  const handleCreateCategory = handleSubmitCategory(async ({ category_name }) => {
    try {
      const { data } = await createCategory({
        variables: { category_name },
      });
  
      if (data?.insert_category_one) {
        toast("Category created successfully");
     resetCategory();
      } else {
        toast("Failed to create category");
      }
    } catch (error) {
      toast("Error creating category");
      console.log(createcategoryError)
      console.error(error);
    }
    console.log(category_name)
  });

  const handleCreateSubCategory = handleSubmitSubcategory(async ({ subcategory_name }) => {
    try {
      if (!category) {
        toast("Please select a category first");
        return;
      }
  
      const { data } = await createSubCategory({
        variables: { subcategory_name:  subcategory_name, category_id: category },
      });
  
      if (data?.insert_subcategory_one) {
        toast("Subcategory created successfully");
      //  setSubCategory(data.insert_subcategory_one.id); // Set the created subcategory ID
      resetSubcategory();
      } else {
        toast("Failed to create subcategory");
      }
    } catch (error) {
      toast("Error creating subcategory");
      console.log(createSubcategoryError)
      console.error(error);
    }
  });

  const [createProduct, { loading: createLoading }] =
    useMutation(CREATE_PRODUCT);
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const navigate = useNavigate();

  console.log(openForm);

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
      console.log(e.target.files[0]);
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

  const handleCreate = handleSubmit(async (credential) => {
    try {
      const images = [image, subImageOne, subImageTwo, subImageThree].filter(
        Boolean
      );
      if (images.length < 4) {
        toast("Please upload all images");
        return;
      } else {
        uploadToDigitalOcean(images);
        await createProduct({
          variables: {
            name: credential.name,
            model: credential.model,
            price: parseInt(credential.price),
            category_id: category,
            subcategory_id: subCategory,
            image_url: `https://axra.sgp1.digitaloceanspaces.com/bonchon-erp/alpha-website/${sanitizeFileName(
              image.name
            )}`, //https://axra.sgp1.digitaloceanspaces.com/axra-tv/$
            product_specification: credential.specification,
            product_description: credential.description,
            sub_img_one_url: `https://axra.sgp1.digitaloceanspaces.com/bonchon-erp/alpha-website/${sanitizeFileName(
              subImageOne.name
            )}`,
            sub_img_two_url: `https://axra.sgp1.digitaloceanspaces.com/bonchon-erp/alpha-website/${sanitizeFileName(
              subImageTwo.name
            )}`,
            sub_img_three_url: `https://axra.sgp1.digitaloceanspaces.com/bonchon-erp/alpha-website/${sanitizeFileName(
              subImageTwo.name
            )}`,
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
            <div className="create-form-heading-layout">
              <div className="back-button-container">
                <button
                  onClick={() =>
                    navigate("/dashboard", { state: { refetch: true } })
                  }
                >
                  <IoArrowBackOutline size={24} />
                  <p>Back</p>
                </button>
              </div>
              <h2>Create New Product</h2>
            </div>
          </div>
          <div className="product-form-container">
            <div
              className={`create-category-form-container ${
                openForm ? "openCategoryForm" : ""
              }`}
            >
              <div className="create-category-form-layout">
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                    paddingLeft: "2rem",
                    paddingTop: "1rem",
                  }}
                  className="category-form"
                  action=""
                  onSubmit={handleCreateCategory}
                >
                  <div className="input-field">
                    <label htmlFor="">Category</label>
                    <input
                      //  style={{width:''}}
                      name="category_name"
                      type="text"
                      placeholder="Enter category name"
                      {...registerCategory("category_name", {
                        required: "category_name is required",
                      })}
                    />
                  </div>
                  <button type="submit" style={{ marginLeft: "0", background:'linear-gradient(to right, #11343b, #625aa7, #271f57)', borderRadius:'0.25rem',color:'white', width:'11.5rem' }}>
                    {createCategoryLoading?(<LoadingButton/>):'Add'}
                  </button>
                </form>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                    paddingLeft: "2rem",
                    paddingTop: "1rem",
                  }}
                  className="subcategory-form"
                  action=""
                  onSubmit={handleCreateSubCategory}
                >
                  <CustomDropdown
                    label="Select Related Category"
                    isMain={true}
                    setCategory={setCategory}
                    setSubCategory={setSubCategory}
                    addable={false}
                    setOpenForm={setOpenForm}
                  />
                  <div className="input-field">
                    <label htmlFor="">Subcategory</label>
                    <input
                    style={{width:'13.6rem'}}
                      name="subcategory_name"
                      type="text"
                      placeholder="Enter subcategory name"
                      {...registerSubcategory("subcategory_name", {
                        required: "subcategory_name is required",
                      })}
                    />
                  </div>
                  <button type="submit" style={{ marginLeft: "0",background:'linear-gradient(to right, #11343b, #625aa7, #271f57)', borderRadius:'0.25rem',color:'white', width:'15rem' }}>
                  {createSubcategoryLoading?(<LoadingButton/>):'Add new Subcategory'}
                  </button>
                </form>
              </div>
              <button className="" onClick={() => setOpenForm(false)}>X</button>
            </div>
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
                    addable={true}
                    setOpenForm={setOpenForm}
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
                    addable={true}
                    setOpenForm={setOpenForm}
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
                        handleImageChange={handleSubImageThreeChange}
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
                <button type="submit">
                  {createLoading ? <LoadingButton /> : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateProduct;
