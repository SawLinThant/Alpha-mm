import "../../../style/detail.css";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../../graphql/queries/productQueries";
import { UPDATE_PRODUCT } from "../../../graphql/mutation/productMutations";
import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";

const ProductDetail = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { data, loading } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    model: '',
    price: '',
    image_url: ''
  });

  useEffect(() => {
    if (data) {
      setProductData(data.product_by_pk);
    }

  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const [updateProduct,{error}] = useMutation(UPDATE_PRODUCT);
 
  const [editable, setEditable] = useState(false);

useEffect(() => {
    const handleCheckboxChange = () => {
      const inputs = document.querySelectorAll(".edit-form-input-container input");
      const submitButton = document.querySelector(".edit-save-button-container button");
      if (!submitButton || !inputs.length) return;

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
        // console.log(credential.name);
        // console.log(credential.category);
        // console.log(credential.model);
        // console.log(credential.price);
      updateProduct({
        variables: {
          id: id, // replace with the actual product ID
          name: productData.name,
          category: productData.category,
          model: productData.model,
          price: productData.price,
          image_url: "http://example.com/updated-image.jpg",
        },
      });
      toast("Update Success");
     // window.location.reload();
    } catch (err) {
      throw new Error("Product update failed");
    }
  });

  if(loading) return <div>Loading</div>

  if (error) return <div>Error: {error.message}</div>;

  return (  
    <> 
      <div className="detail-container">
      <Toaster/>
        <div className="detail-container-layout">
          <div className="detail-description-container">
            <div className="description-header">
              <input type="checkbox" className="edit-checkbox" />
              <div className="edit-label">
                <p>Edit Mode</p>
                <FaEdit />
              </div>
            </div>
            <div className="description-image-container">
              <div className="description-image-layout"></div>
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
                    <label htmlFor="">Category</label>
                    <input
                      name="category"
                      type="text"
                      placeholder={productData.category}
                      disabled={!editable}
                      // {...register("category", {
                      //   required: "category is required",
                      // })}
                       value={productData.category}
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
                  <div className="edit-save-button-container">
                    <button type="submit">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>  
  );
};
export default ProductDetail;
