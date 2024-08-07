import "../../style/product.css";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CATEGORIES } from "../../graphql/queries/productQueries";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../modules/icons/loading-button";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";

const AllProducts = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4;
  const [pagination, setPagination] = useState(1);

  const { data: categeories, loading: fetchCategory } =
    useQuery(GET_CATEGORIES);
  const categoryType = categeories ? categeories.category : [];

  const handlePageChange = ((direction) => {
    setPagination((prevPagination) => {
        const currentPage = prevPagination;
        const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        return newPage;
    })
  })

  if (fetchCategory)
    return (
      <div className="loading-container">
        <LoadingButton />
        Loading...
      </div>
    );
  return (
    <div>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate("/")}>Home</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>Products</p>
        </div>
      </div>
      {categoryType &&
        categoryType.map((category, index) => {
            const productsByCategory = category.products || [];
            console.log(productsByCategory)
          const currentPage = pagination;
          const totalPages = Math.ceil(
            productsByCategory.length / itemsPerPage
          );
          const currentProducts = productsByCategory.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          );

          console.log(currentProducts)

          if (productsByCategory.length < 0)
            return <div>No products to show</div>;

          return (
            <section
              className={`product-container ${
                index % 2 === 0
                  ? "product-container-white"
                  : "product-container-gray"
              }`}
              key={category.id}
            >
              <div className="product-container-layout">
                <div className="product-container-heading-container">
                  <h2>{category.category_name}</h2>
                  {productsByCategory.length > itemsPerPage ? (
                    <div className="pagination-controls">
                      <button
                        onClick={() => handlePageChange( "prev")}
                        disabled={currentPage === 1}
                      >
                        <div
                          className="prev-btn-icon-div"
                          style={{
                            backgroundColor: currentPage === 1 ? "#D9D9D9" : "",
                          }}
                        >
                          <PaginationArrowIcon width={24} height={24} />
                        </div>
                      </button>
                      <button
                        onClick={() => handlePageChange( "next")}
                        disabled={currentPage === totalPages}
                      >
                        <div
                          style={{
                            backgroundColor:
                              currentPage === totalPages ? "#D9D9D9" : "",
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
                    {productsByCategory.length < 1? (<div className="no-product-sign"><p>No Proudct Yet!</p></div>):(<></>)}
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
        <Footer/>
    </div>
  );
};
export default AllProducts;
