import "../../../style/product.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_SUBCATEGORY } from "../../../graphql/queries/productQueries";
import { useState } from "react";
import PaginationArrowIcon from "../../../modules/icons/pagination-arrow";
import LoadingButton from "../../../modules/icons/loading-button";

const SubCategory = () => {
  const { subcategory } = useParams();
  const { data: getSubcategory, loading: fetchSubCategory } = useQuery(
    GET_PRODUCTS_BY_SUBCATEGORY,
    {
      variables: { subcategory: subcategory },
    }
  );
  const navigate = useNavigate();
  const products = getSubcategory ? getSubcategory.product : [];
  //console.log(products);
  const category = getSubcategory && getSubcategory.product.length>0?getSubcategory.product[0].category.category_name : ""; 
  console.log(category)
  const [pagination, setPagination] = useState(1)
  const itemPerPage = 2;
  const totalPages = Math.ceil(
    products.length / itemPerPage,
  );
  const currentProducts = products.slice(
    (pagination - 1) * itemPerPage,
    pagination * itemPerPage
  )

  const handlePageChange = ((direction) => {
    setPagination((prevPagination) => {
        const currentPage = prevPagination;
        const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        return newPage;
    })
  })

  if (fetchSubCategory) return <div className="loading-container"><LoadingButton/>Loading...</div>;

  return (
    <div className="product-cat-sub-container">
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate(`/`)}>Home</p>
          <span>/</span>
          <p onClick={() => navigate(`/products/${category}`)}>{category}s</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>{subcategory}s</p>
        </div>
      </div>
      <section className="product-container">
        <div className="product-container-layout">
            <div className="product-container-heading-container">
                <h2>{subcategory}s</h2>
                {products.length > itemPerPage ? (
                  <div className="pagination-controls">
                    <button
                      onClick={() => handlePageChange( "prev")}
                      disabled={pagination === 1}
                    >
                      <div
                        className="prev-btn-icon-div"
                        style={{
                          backgroundColor: pagination === 1? "#D9D9D9" : ""
                          //filter: pagination === 1 ? "back" : "none",
                        }}
                      >
                        <PaginationArrowIcon width={24} height={24} />
                      </div>
                    </button>
                    {/* <span>
                Page {currentPage} of {totalPages}
              </span> */}
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
                ) : (
                  <div></div>
                )}
            </div>
            <div className="products-container">
                {currentProducts.map((product) => (
                      <div
                      className="individual-product-container"
                      key={product.id}
                      onClick={() =>
                        navigate(`/products/productdetail/${product.id}`)
                      }
                    >
                      <div className="product-image-container">
                        <img src={product.image_url} alt={product.name} />
                      </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <div className="half-footer">
        <div className="half-footer-layout">
            <p>Copyright© 2024 Alpha Electronic. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
