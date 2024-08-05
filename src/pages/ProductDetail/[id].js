import "../../style/productdetail.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DirectionIcon from "../../modules/icons/direction";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  GET_PRODUCT_BY_ID,
  GET_SUBCATEGORY_BY_PRODUCT_ID,
} from "../../graphql/queries/productQueries";

const convertStringToArray = (text) => {
  return text.split(",");
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product_by_pk, loading: fetchProduct } = useQuery(
    GET_PRODUCT_BY_ID,
    {
      variables: { id: id },
    }
  );
  const { data: subcategory, loading: fetchSubCategory } = useQuery(
    GET_SUBCATEGORY_BY_PRODUCT_ID,
    {
      variables: { id: id },
    }
  );

  const navigate = useNavigate();

  if (fetchProduct) return <div>Loading</div>;
  if (fetchSubCategory) return <div>Loading</div>;

  const productData = product_by_pk ? product_by_pk : [];
  const category = productData.product_by_pk.category.category_name || "";
  const subCategory =
    productData.product_by_pk.subcategory.subcategory_name || "";
  const productName = productData.product_by_pk.name || "";
  const model = productData.product_by_pk.model;
  const price = productData.product_by_pk.price || ";";
  const image_url = productData.product_by_pk.image_url || "";
  const sub_img_one_url =  productData.product_by_pk.sub_img_one_url || "";
  const sub_img_two_url =  productData.product_by_pk.sub_img_two_url || "";
  const sub_img_three_url =  productData.product_by_pk.sub_img_three_url || "";
  const description = productData.product_by_pk.product_description || "";
  const descriptionList = convertStringToArray(description);
  const specification = productData.product_by_pk.product_specification || "";
  const specificationList = convertStringToArray(specification);

  const relatedCategory = subcategory ? subcategory.subcategory : [];
  const relatedPorudct = subcategory && subcategory.subcategory ? subcategory.subcategory[0].products : [];

  return (
    <div>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate("/")}>Home</p>
          <span>/</span>
          <p onClick={() => navigate(`/products/${category}`)}>{category}</p>
          <span>/</span>
          <p onClick={() => navigate(`/products/subcategory/${subCategory}`)}>
            {subCategory}
          </p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>{model}</p>
        </div>
      </div>
      <div className="prodcut-detail-container">
        <div className="product-detail-layout">
          <div className="product-detail-images-container">
            <div className="product-detail-images-layout">
              <div className="product-subimg-container">
                <div className="product-subimg">
                  <img src={sub_img_one_url} alt="sub-img" />
                </div>
                <div className="product-subimg">
                  <img src={sub_img_two_url} alt="sub-img" />
                </div>
                <div className="product-subimg">
                  <img src={sub_img_three_url} alt="sub-img" />
                </div>
              </div>
              <div className="product-mainimg-container">
                <img src={image_url} alt="main-img" />
              </div>
            </div>

            <div className="product-mvp-container">
              <div className="product-mvp-heading">
                <div className="product-heading">
                  <h4>{`${productName} ${model}`}</h4>
                </div>
                <div className="prodcut-sub-heading">
                  <p className="brand">
                    Brand: <span className="brand-name">Alpha</span>
                  </p>
                  <div className="price">
                    <p>KS</p> <span className="price-number">{price}</span>
                  </div>
                </div>
              </div>
              <div className="product-mvp-text">
                {descriptionList &&
                  descriptionList.map((description, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "3px",
                      }}
                    >
                      <p>-</p>
                      <p>{description}</p>
                    </div>
                  ))}
              </div>
              <div className="product-mvp-button">
                <button>
                  <p>Find Store Location</p>
                  <DirectionIcon width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="product-bottom-description-container">
            <h1>Product details of Alpha 1.7L Electric Kettle ALKT170L</h1>
            <div className="description-list-container">
              <ul>
                {specificationList &&
                  specificationList.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
              </ul>
            </div>
          </div>
          {relatedPorudct.length <= 1? (<div></div>):(
            <div className="related-products-container">
            <h1>Related Products</h1>
            <div className="related-products">
              <div className="related-products-layout">
                <div className="related-product-layout">
                  {relatedCategory.map((subcategory) =>
                    subcategory.products
                      .filter((product) => product.id !== id) // Exclude current product
                      .map((product) => (
                        <div className="related-product" key={product.id}>
                          <a href={`/products/productdetail/${product.id}`}>
                            <img src={product.image_url} alt={product.name} />
                          </a>
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>
          )}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;

