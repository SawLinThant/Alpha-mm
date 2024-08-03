import { useQuery } from "@apollo/client";
import {
  GET_CATEGORIES,
  GET_CATEGORY_BY_NAME,
  GET_PRODUCTS_BY_SUBCATEGORY,
} from "../../graphql/queries/productQueries";
import "../../style/product.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";

const Products = () => {
  const { category } = useParams();
  const itemsPerPage = 5; // Number of items per page

  // State to manage pagination for each subcategory
  const [pagination, setPagination] = useState({});

  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_SUBCATEGORY, {
    variables: { subcategory: "kettle" },
  });

  const { data: get_category, loading: fetchCategory } = useQuery(
    GET_CATEGORY_BY_NAME,
    {
      variables: { category_name: category },
    }
  );

  const fetchedSubCategory =
    get_category && get_category.category.length > 0
      ? get_category.category[0].subcategories
      : [];

  if (loading || fetchCategory) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Use useCallback to ensure handlePageChange doesn't get recreated on every render
  const handlePageChange = ((subCategoryId, direction) => {
    setPagination((prevPagination) => {
      const currentPage = prevPagination[subCategoryId] || 1;
      const newPage =
        direction === "next" ? currentPage + 1 : currentPage - 1;
      return {
        ...prevPagination,
        [subCategoryId]: newPage,
      };
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p>Home</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>{category}</p>
        </div>
      </div>
      {fetchedSubCategory.map((subCategory, index) => {
        const currentPage = pagination[subCategory.id] || 1;
        const totalPages = Math.ceil(subCategory.products.length / itemsPerPage);
        const currentProducts = subCategory.products.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

        // Render the section only if there are products
        if (subCategory.products.length === 0) return null;

        return (
          <section
            className={`product-container ${
              index % 2 === 0 ? "product-container-white" : "product-container-gray"
            }`}
            key={subCategory.id}
          >
            
            <div className="product-container-layout">
              <div className="product-container-heading-container">
              <h2>{subCategory.subcategory_name}s</h2>
              {subCategory.products.length>itemsPerPage?(
              <div className="pagination-controls">
              <button
                onClick={() => handlePageChange(subCategory.id, "prev")}
                disabled={currentPage === 1}
              >
               <div className="prev-btn-icon-div"><PaginationArrowIcon width={24} height={24}/></div>
              </button>
              {/* <span>
                Page {currentPage} of {totalPages}
              </span> */}
              <button
                onClick={() => handlePageChange(subCategory.id, "next")}
                disabled={currentPage === totalPages}
              >
                <div className="next-btn-icon-div"><PaginationArrowIcon width={24} height={24}/></div>
              </button>
            </div>
              ):(<div></div>)}
              
              </div>
              
              <div className="products-container">
                {currentProducts.map((product) => (
                  <div
                    className="individual-product-container"
                    key={product.id}
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
