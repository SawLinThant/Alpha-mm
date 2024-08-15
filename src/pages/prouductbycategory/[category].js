import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import "../../style/product.css";
import RightArrowCircle from "../../modules/icons/rignt-arrow-circle";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_BY_NAME } from "../../graphql/queries/productQueries";
import ProductList from "../../components/productlist";
import { useEffect, useState } from "react";
import LoadingButton from "../../modules/icons/loading-button";
import Footer from "../../components/footer";
import { useMemo } from "react";
import SidebarToggleIcon from "../../modules/icons/sidebar-toggle";
import Sidebar from "../../components/mobilenav";

const ProductByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [isAllProducts, setIsAllProducts] = useState(true);
  const [activeBtn, setActiveBtn] = useState();
  const [subCategory, setSubcategory] = useState("");
  const handleChoose = (buttinId, name) => {
    setActiveBtn(buttinId);
    setIsAllProducts(false);
    setSubcategory(name);
  };
  console.log(subCategory);
  const handleChooseAll = () => {
    setActiveBtn(null);
    setIsAllProducts(true);
  };
  const {
    data: get_category,
    loading: fetchCategory,
    error: fetchCategoryError,
  } = useQuery(GET_CATEGORY_BY_NAME, {
    variables: { category_name: category },
    pollInterval: 500,
  });
  const allProducts =
    get_category && get_category.category.length > 0
      ? get_category.category[0].products
      : [];

  const subCategoryList =
    get_category && get_category.category.length > 0
      ? get_category.category[0].subcategories
      : [];

  useEffect(() => {}, [subCategory,activeBtn]);

  console.log(activeBtn);

  const [pagination, setPagination] = useState(1);
  const [typePagination, setTypePagination] = useState(1);
  const typeItemsPerPage = 2;
  const itemsPerPage = 5;
  const totalTypePages = Math.ceil(subCategoryList.length / typeItemsPerPage);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const currentTypeItems = useMemo(() => {
    const start = (typePagination - 1) * typeItemsPerPage;
    const end = start + typeItemsPerPage;
    return subCategoryList.slice(start, end);
  }, [subCategoryList, typePagination, typeItemsPerPage]);

  const currentItems = useMemo(() => {
    const start = (pagination - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return allProducts.slice(start, end);
  }, [allProducts, pagination, itemsPerPage]);

  console.log(currentItems);

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

  const handleTypePageChange = (direction) => {
    console.log(direction);
    setActiveBtn(null);
    setTypePagination((prevPagination) => {
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
            className={`category-pagination-button ${
              pagination === i ? "isactive" : ""
            }`}
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
            className={`category-pagination-button ${
              pagination === i ? "isactive" : ""
            }`}
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
          className={`category-pagination-button ${
            pagination === totalPages ? "isactive" : ""
          }`}
          onClick={() => handlePageChangeByNumber(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  if (fetchCategory)
    return (
      <div className="loading-container">
        <LoadingButton />
        Loading...
      </div>
    );

  if (fetchCategoryError) return <div>error fetchinfg data</div>;
  return (
    <div style={{ backgroundColor: "#B1B3B6" }}>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate("/")}>Home</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>
            {category
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="category-nav-container">
        <div className="category-nav-container-layout">
          <div className="category-nav-list-container">
            <button
              onClick={() => handleTypePageChange("prev")}
              className="category-nav-list-prev-btn"
              disabled={typePagination === 1}
              style={{
                backgroundColor: `${
                  typePagination === 1 ? "#D9D9D9" : "#4A4CCD"
                }`,
              }}
            >
              <PaginationArrowIcon
                height={24}
                width={24}
                color={`${typePagination === 1 ? "#C1C1C1" : "white"}`}
              />
            </button>
            <div className="category-nav-lists">
              <div className="category-nav-list-catageory-btn">
                <button
                  onClick={() => {
                    handleChooseAll();
                   // setActiveBtn(null)
                  }}
                  style={{
                    backgroundColor: `${isAllProducts ? "#4A4CCD" : "#D9D9D9"}`,
                  }}
                  className="category-nav-list-all-btn"
                >
                  All
                </button>
                {currentTypeItems &&
                  currentTypeItems.map((subCategory, index) => (
                    <button
                      key={subCategory.id}
                      className="pagination-category-button"
                      onClick={() =>
                        handleChoose(index, subCategory.subcategory_name)
                      }
                      style={{
                        border: "none",
                        backgroundColor: `${
                          activeBtn === index ? "#4A4CCD" : "#D9D9D9"
                        }`,
                        color: `${activeBtn === index ? "white" : "#C1C1C1"}`,
                      }}
                    >
                      {subCategory.subcategory_name}
                    </button>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handleTypePageChange("next")}
              className="category-nav-list-next-btn"
              disabled={typePagination === totalTypePages}
              style={{
                backgroundColor: `${
                  typePagination === totalTypePages ? "#D9D9D9" : "#4A4CCD"
                }`,
              }}
            >
              <PaginationArrowIcon
                height={24}
                width={24}
                color={`${
                  typePagination === totalTypePages ? "#C1C1C1" : "white"
                }`}
              />
            </button>
          </div>
          <div className="showmore-btn-container">
            <button className="showmore-btn">
              <p className="showmore-btn-text">Show More</p>
              <Sidebar
                showMore="true"
                subCategory={subCategoryList}
                Category={category}
                setSubcategory={setSubcategory}
                setIsAllProducts={setIsAllProducts}
                setActiveBtn={setActiveBtn}
              />
              {/* <SidebarToggleIcon height={24} width={24}/> */}
            </button>
          </div>
        </div>
      </div>
      {isAllProducts ? (
        <div className="category-product-list-container">
          <div className="category-product-list-layout">
            {currentItems &&
              currentItems.map((product) => (
                //  <div className="category-individual-product-container-layout">
                <div
                  onClick={() =>
                    navigate(`/products/productdetail/${product.id}`)
                  }
                  className="category-individual-product-container"
                >
                  <div className="category-individual-product-img">
                    <img src={product.image_url} />
                  </div>
                  <div className="category-individual-product-description">
                    <p className="product-type">
                      {product.subcategory
                        ? product.subcategory.subcategory_name
                        : ""}
                    </p>
                    <p className="product-name">
                      {product.name} {`(${product.model})`}
                    </p>
                    <p className="product-price">
                      {product.price} <span>KS</span>
                    </p>
                  </div>
                </div>
                // </div>
              ))}
          </div>
          {currentItems.length > 0 ? (
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
                    color={`${
                      pagination === totalPages ? "#C1C1C1" : "#262626"
                    }`}
                  />
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {currentItems.length < 0 ? (
            <div style={{ width: "100%", height: "100%" }}>
              <p style={{ color: "red", textAlign: "center" }}>
                No product yet!
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <ProductList key={subCategory} subCategory={subCategory} />
      )}
      <div className="divider"></div>
      <Footer />
    </div>
  );
};
export default ProductByCategory;
