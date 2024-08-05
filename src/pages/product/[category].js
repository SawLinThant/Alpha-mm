import { useQuery } from "@apollo/client";
import {
  GET_CATEGORIES,
  GET_CATEGORY_BY_NAME,
  GET_PRODUCTS_BY_SUBCATEGORY,
} from "../../graphql/queries/productQueries";
import "../../style/product.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";
import LoadingButton from "../../modules/icons/loading-button";

const Products = () => {
  const { category } = useParams();
  const itemsPerPage = 2;
  const navigate = useNavigate();

  const { data: get_category, loading: fetchCategory } = useQuery(
    GET_CATEGORY_BY_NAME,
    {
      variables: { category_name: category },
    }
  );

  const [pagination, setPagination] = useState({});

  const handlePageChange = useCallback((subCategoryId, direction) => {
    setPagination((prevPagination) => {
      const currentPage = prevPagination[subCategoryId] || 1;
      const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
      return {
        ...prevPagination,
        [subCategoryId]: newPage,
      };
    });
  }, []);

  const fetchedSubCategory =
    get_category && get_category.category.length > 0
      ? get_category.category[0].subcategories
      : [];

  if (fetchCategory) return <div className="loading-container"><LoadingButton/>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate('/')}>Home</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>{category}</p>
        </div>
      </div>
      {fetchedSubCategory.map((subCategory, index) => {
        const currentPage = pagination[subCategory.id] || 1;
        const totalPages = Math.ceil(
          subCategory.products.length / itemsPerPage
        );
        const currentProducts = subCategory.products.slice(
          (currentPage - 1) * itemsPerPage, 
          currentPage * itemsPerPage
        );

        // Render the section only if there are products
        if (subCategory.products.length === 0) return null;

        return (
          <section
            className={`product-container ${
              index % 2 === 0
                ? "product-container-white"
                : "product-container-gray"
            }`}
            key={subCategory.id}
          >
            <div className="product-container-layout">
              <div className="product-container-heading-container">
                <h2>{subCategory.subcategory_name}s</h2>
                {subCategory.products.length > itemsPerPage ? (
                  <div className="pagination-controls">
                    <button
                      onClick={() => handlePageChange(subCategory.id, "prev")}
                      disabled={currentPage === 1}
                    >
                      <div
                        className="prev-btn-icon-div"
                        style={{
                           backgroundColor: currentPage === 1? "#D9D9D9" : ""
                        }}
                      >
                        <PaginationArrowIcon width={24} height={24} />
                      </div>
                    </button>
                    {/* <span>
                Page {currentPage} of {totalPages}
              </span> */}
                    <button
                      onClick={() => handlePageChange(subCategory.id, "next")}
                      disabled={currentPage === totalPages}
                    >
                      <div
                        style={{
                           backgroundColor: currentPage === totalPages? "#D9D9D9" : ""
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
        );
      })}
      <div className="product-divider-footer"></div>
      <Footer />
    </div>
  );
};

export default Products;
