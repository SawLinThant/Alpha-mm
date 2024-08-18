import "../../style/productdetail.css";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import DirectionIcon from "../../modules/icons/direction";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  GET_PRODUCT_BY_ID,
  GET_SUBCATEGORY_BY_PRODUCT_ID,
} from "../../graphql/queries/productQueries";
import LoadingButton from "../../modules/icons/loading-button";
import { useEffect, useState, useMemo } from "react";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";
import ModalImage from "react-modal-image";

const convertStringToArray = (text) => {
  return text.split(",");
};

const ProductDetail = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { id } = useParams();
  const { data: product_by_pk, loading: fetchProduct } = useQuery(
    GET_PRODUCT_BY_ID,
    {
      variables: { id: id },
      pollInterval: 500,
    }
  );
  const { data: subcategory, loading: fetchSubCategory } = useQuery(
    GET_SUBCATEGORY_BY_PRODUCT_ID,
    {
      variables: { id: id },
      pollInterval: 500,
    }
  );

  const navigate = useNavigate();

  const productData = product_by_pk ? product_by_pk : [];
  const category =
    productData && productData.product_by_pk
      ? productData.product_by_pk.category.category_name
      : "";
  // const subCategory =
  //   productData.product_by_pk.subcategory.subcategory_name || "";
  const productName =
    productData && productData.product_by_pk
      ? productData.product_by_pk.name
      : "";
  const model =
    productData && productData.product_by_pk
      ? productData.product_by_pk.model
      : "";
  const price =
    productData && productData.product_by_pk
      ? productData.product_by_pk.price
      : "";
  const image_url =
    productData && productData.product_by_pk
      ? productData.product_by_pk.image_url
      : "";
  const sub_img_one_url =
    productData && productData.product_by_pk
      ? productData.product_by_pk.sub_img_one_url
      : "";
  const sub_img_two_url =
    productData && productData.product_by_pk
      ? productData.product_by_pk.sub_img_two_url
      : "";
  const sub_img_three_url =
    productData && productData.product_by_pk
      ? productData.product_by_pk.sub_img_three_url
      : "";
  const description =
    productData && productData.product_by_pk
      ? productData.product_by_pk.product_description
      : "";
  const descriptionList = convertStringToArray(description);
  const specification =
    productData && productData.product_by_pk
      ? productData.product_by_pk.product_specification
      : "";
  const specificationList = convertStringToArray(specification);

  const relatedCategory = subcategory ? subcategory.subcategory : [];
  const relatedProduct =
    subcategory && subcategory.subcategory
      ? subcategory.subcategory[0].products
      : [];
  const filteredRelatedProducts = relatedProduct.filter(
    (product) => product.id != id
  );
  console.log(filteredRelatedProducts);

  const [pagination, setPagination] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredRelatedProducts.length / itemsPerPage);

  const currentRelatedItems = useMemo(() => {
    const start = (pagination - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredRelatedProducts.slice(start, end);
  }, [filteredRelatedProducts, pagination, itemsPerPage]);

  const handlePageChange = (direction) => {
    console.log(direction);
    setPagination((prevPagination) => {
      const currentPage = prevPagination;
      const newPage =
        direction === "next" ? prevPagination + 1 : prevPagination - 1;
      if (newPage < 1 || newPage > totalPages) {
        return currentPage; // Do not change the page if out of bounds
      }
      return newPage;
    });
  };

  if (fetchProduct)
    return (
      <div className="loading-container">
        <LoadingButton />
        Loading...
      </div>
    );
  if (fetchSubCategory)
    return (
      <div className="loading-container">
        <LoadingButton />
        Loading...
      </div>
    );

  return (
    <div style={{ backgroundColor: "#B1B3B6" }}>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate("/")}>Home</p>
          <span>/</span>
          <p onClick={() => navigate(`/productbycategory/${category}`)}>
            {category
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </p>
          <span>/</span>
          {/* <p onClick={() => navigate(`/products/subcategory/${subCategory}`)}>
            {subCategory}
          </p>
          <span>/</span> */}
          <p style={{ color: "#4A4CCD" }}>{model}</p>
        </div>
      </div>
      <div className="prodcut-detail-container">
        <div className="product-detail-layout">
          <div className="product-detail-images-container">
            <div className="product-detail-images-layout">
              <div className="product-subimg-container">
                <div className="product-subimg">
                  {/* <img src={sub_img_one_url} alt="sub-img" /> */}
                  <ModalImage
                   small={sub_img_one_url}
                   large={sub_img_one_url}
                   alt=""
                   hideZoom={true}
                  />
                </div>
                <div className="product-subimg">
                  {/* <img src={sub_img_two_url} alt="sub-img" /> */}
                  <ModalImage
                   small={sub_img_two_url}
                   large={sub_img_two_url}
                   alt=""
                   hideZoom={true}
                  />
                </div>
                <div className="product-subimg">
                  {/* <img src={sub_img_three_url} alt="sub-img" /> */}
                  <ModalImage
                   small={sub_img_three_url}
                   large={sub_img_three_url}
                   alt=""
                   hideZoom={true}
                  />
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
                <button onClick={() => navigate("/store")}>
                  <p>Find Store Location</p>
                  <DirectionIcon width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="product-bottom-description-container">
            <h1>Product details of {`${productName} ${model}`}</h1>
            <div className="description-list-container">
              <ul>
                {specificationList &&
                  specificationList.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
              </ul>
            </div>
          </div>
          {relatedProduct.length <= 1 ? (
            <div></div>
          ) : (
            <div className="related-products-container">
              <div className="related-product-heading">
                <h1>Related Products</h1>
                <div className="pagination-controls">
                    <button
                      onClick={() => handlePageChange( "prev")}
                      disabled={pagination === 1}
                    >
                      <div
                        className="prev-btn-icon-div"
                        style={{
                          backgroundColor: pagination === 1? "#D9D9D9" : ""
                        }}
                      >
                        <PaginationArrowIcon width={24} height={24} />
                      </div>
                    </button>
                    <button
                      onClick={() => handlePageChange( "next")}
                      disabled={pagination === totalPages}
                    >
                      <div
                        style={{
                          backgroundColor: pagination === totalPages? "#D9D9D9" : ""
                        }}
                        className="next-btn-icon-div
                "
                      >
                        <PaginationArrowIcon width={24} height={24} />
                      </div>
                    </button>
                  </div>
              </div>

              <div className="related-products">
                <div className="related-products-layout">
                  <div className="related-product-layout">
                    {/* {relatedCategory.map((subcategory) =>
                      subcategory.products
                        .filter((product) => product.id !== id) // Exclude current product
                        .map((product) => (
                          <div className="related-product" key={product.id}>
                            <a href={`/products/productdetail/${product.id}`}>
                              <img src={product.image_url} alt={product.name} />
                            </a>
                          </div>
                        ))
                    )} */}
                    {currentRelatedItems.map((product) => (
                      <div className="related-product" key={product.id}>
                        <a href={`/products/productdetail/${product.id}`}>
                          <img src={product.image_url} alt={product.name} />
                        </a>
                      </div>
                    ))}
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
