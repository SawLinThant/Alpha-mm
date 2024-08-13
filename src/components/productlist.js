import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_SUBCATEGORY } from "../graphql/queries/productQueries";
import LoadingButton from "../modules/icons/loading-button";
import { useState,useMemo, useEffect } from "react";
import PaginationArrowIcon from "../modules/icons/pagination-arrow";
import { useNavigate } from "react-router-dom";

const ProductList = ({subCategory='kettle'}) => {
  const navigate = useNavigate();
  const { data: getSubcategory, loading: fetchSubCategory } = useQuery(
    GET_PRODUCTS_BY_SUBCATEGORY,
    {
        variables: {subcategory: subCategory},
        pollInterval: 500
    }
  );
  useEffect(() => {

  },[subCategory])
  const products = getSubcategory ? getSubcategory.product : [];
  const [pagination, setPagination] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (pagination - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  }, [products, pagination, itemsPerPage]);

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

  const handlePageChangeByNumber = (pageNumber) => {
    setPagination(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
  
    if (totalPages <= 4) {
      // If there are 4 or fewer pages, show all of them
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`category-pagination-button ${pagination === i ? "isactive" : ""}`}
            onClick={() => handlePageChangeByNumber(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first 3 pages
      for (let i = 1; i <= 3; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`category-pagination-button ${pagination === i ? "isactive" : ""}`}
            onClick={() => handlePageChangeByNumber(i)}
          >
            {i}
          </button>
        );
      }
  
      // Show ellipsis if the current page is beyond the first 3 pages
      if (pagination > 4) {
        pageNumbers.push(<span key="ellipsis-1">...</span>);
      }
  
      // Show the current page number if it's not among the first 3 or last page
      if (pagination > 3 && pagination < totalPages) {
        pageNumbers.push(
          <button
            key={pagination}
            className={`category-pagination-button isactive`}
            onClick={() => handlePageChangeByNumber(pagination)}
          >
            {pagination}
          </button>
        );
      }
  
      // Show ellipsis if the current page is more than 1 page away from the last page
      if (pagination < totalPages - 2) {
        pageNumbers.push(<span key="ellipsis-2">...</span>);
      }
  
      // Show the last page number
      pageNumbers.push(
        <button
          key={totalPages}
          className={`category-pagination-button ${pagination === totalPages ? "isactive" : ""}`}
          onClick={() => handlePageChangeByNumber(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
  
    return pageNumbers;
  };

  if (fetchSubCategory) return <div className="loading-container"><LoadingButton/>Loading...</div>;
    return(
        <div className="category-product-list-container">
        <div className="category-product-list-layout">
          {currentItems && currentItems.map((product) => (
            //  <div className="category-individual-product-container-layout">
            <div onClick={() => navigate(`/products/productdetail/${product.id}`)} className="category-individual-product-container">
            <div className="category-individual-product-img">
              <img src={product.image_url}/>
            </div>
            <div className="category-individual-product-description">
               <p className="product-type">{product.subcategory.subcategory_name}</p>
               <p className="product-name">{product.name} {`(${product.model})`}</p>
               <p className="product-price">{product.price} <span>KS</span></p>
            </div>
          </div>
          // </div>
          ))}
          
        </div>
        <div className="pagination-control-container">
            <div className="pagination-control-layout">
              <button
                className={`category-prev-btn ${
                  pagination === 1 ? "disable" : ""
                }`}
                disabled={pagination === 1}
                onClick={() => handlePageChange("prev")}
              >
                {" "}
                <PaginationArrowIcon
                  height={24}
                  width={24}
                  color={`${pagination === 1 ? "#C1C1C1" : "#262626"}`}
                />
              </button>
              {renderPageNumbers()}{" "}
              {/* <div className="pagination-indicator">{pagination}<span>of</span>{totalPages}</div> */}
              <button
                className={`category-next-btn ${
                  pagination === totalPages ? "disable" : ""
                }`}
                disabled={pagination === totalPages}
                onClick={() => handlePageChange("next")}
              >
                {" "}
                <PaginationArrowIcon
                  height={24}
                  width={24}
                  color={`${pagination === totalPages ? "#C1C1C1" : "#262626"}`}
                />
              </button>
            </div>
          </div>
      </div>
    )
}
export default ProductList;