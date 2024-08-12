import "../../style/product.css";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";
import { GET_CATEGORIES } from "../../graphql/queries/productQueries";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../modules/icons/loading-button";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";
import { useInView } from "react-intersection-observer";
import Catalouge from "../../components/catalouge";
import RightArrrow from "../../modules/icons/rightarrow";

const AllProducts = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4;
  const [pagination, setPagination] = useState({});
  const KITCHEN_ITEMS = [
    {
      id: "1",
      name: "Kitchens",
      items: {
        itemone:"Electric Kettles",
        itemtwo:"Microwave Ovens",
        itemthree:"Blenders",
      },
      img_url: "/kitchen.png",
      product_link: "/products/kitchen"
    },
   
    {
      id: "2",
      name: "Laundry",
      items: {
        itemone:"Washing Machines",
        itemtwo:"Dryers",
        itemthree:"Steamers",
      },
      img_url: "/laundry.png",
      product_link: "/products/laundry"
    },

    {
      id: "3",
      name: "Entertainments",
      items: {
        itemone:"Televisions",
        itemtwo:"Sound Systems",
      },
      img_url: "/entertainment.png",
      product_link: "/products/entertainment"
    },

    {
      id: "4",
      name: "Miscellaneous",
      items: {
        itemone:"Water Purifiers",
        itemtwo:"Air Purifiers",
      },
      img_url: "/miscellaneous.png",
      product_link: "/products/miscellaneous"
    },
  ];

  const { data: categeories, loading: fetchCategory } =
    useQuery(GET_CATEGORIES,{
      pollInterval: 500
    });
  const categoryType = categeories ? categeories.category : [];

  const { ref: showcaseLeftRef, inView: showcaseLeftInView } = useInView({
    triggerOnce: false,
  });

  const { ref: showcaseRightRef, inView: showcaseRightInView } = useInView({
    triggerOnce: false,
  });

  const { ref: mobileCategoryTopRef1, inView: mobileCategoryTopInView1 } = useInView({
    triggerOnce: false,
  });
  const { ref: mobileCategoryTopRef2, inView: mobileCategoryTopInView2 } = useInView({
    triggerOnce: false,
  });
  const { ref: mobileCategoryMidRef, inView: mobileCategoryMidInView } = useInView({
    triggerOnce: false,
  });
  const { ref: mobileCategoryBottomRef1, inView: mobileCategoryBottomInView1 } = useInView({
    triggerOnce: false,
  });
  const { ref: mobileCategoryBottomRef2, inView: mobileCategoryBottomInView2 } = useInView({
    triggerOnce: false,
  });

  const handlePageChange = useCallback((categoryId,direction) => {
    setPagination((prevPagination) => {
        const currentPage = prevPagination[categoryId] || 1;
        const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        return {
          ...prevPagination,
          [categoryId]: newPage,
        };
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
      {/* <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p onClick={() => navigate("/")}>Home</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>Products</p>
        </div>
      </div> */}
      {/* {categoryType &&
        categoryType.map((category, index) => {
            const productsByCategory = category.products || [];
            console.log(productsByCategory)
          const currentPage = pagination[category.id] || 1;
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
                        onClick={() => handlePageChange(category.id, "prev")}
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
                        onClick={() => handlePageChange( category.id,"next")}
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
        })} */}
        {/* <section className="showcase">
          <div className="showcase-layout">
            <div
             ref={showcaseLeftRef}
             className={`showcase-left ${
               showcaseLeftInView ? "animate-left" : ""
             }`}
            >
              <div className="showcase-left-img" 
              // style={{
              //   backgroundImage:`url('/show-left.jpg')`,
              //   backgroundPosition:'center',
              //   backgroundSize:'cover',
              //   display:'flex',
              //   flexDirection:'column',
              //   alignItems:'center',
              //   justifyContent:'space-between'
              // }}
              >
              <div className="showcaseleft-img-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="left-img-button-container">
                  <a href="/products">
                  <p>View All</p><RightArrrow width={24} height={24}/>
                  </a>
                </div>
               
              </div> 
              <div className="showcase-left-image-icon" 
                //style={{width:'90%', height:'13rem', backgroundImage:`url('/htoo.png')`, backgroundPosition:'center', backgroundSize:'cover'}}
                ></div>
              </div>
           
            </div>
            <div
             ref={showcaseRightRef}
             className={`showcase-right ${
               showcaseRightInView ? "animate-right" : ""
             }`}
            >
              <Catalouge Items={KITCHEN_ITEMS} />
            </div>
          </div>
        </section> */}
        <section className="showcase">
        <div className="showcase-layout">
          <div
            ref={showcaseLeftRef}
            className={`showcase-left ${
              showcaseLeftInView ? "animate-left" : ""
            }`}
          >
            <div className="showcase-left-img">
              <img src="/left-showcasebg.jpg" alt="" />
              {/* <div className="showcaseleft-img-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="left-img-button-container">
                  <a href="/products">
                  <p>View All</p><RightArrrow width={24} height={24}/>
                  </a>
                </div>
              </div> */}
              {/* <div className="showcase-left-image-icon"></div> */}
            </div>
          </div>
          <div
            ref={showcaseRightRef}
            className={`showcase-right ${
              showcaseRightInView ? "animate-right" : ""
            }`}
          >
            {/* <Catalouge Items={KITCHEN_ITEMS} /> */}

            <div onClick={() =>navigate('/products/kitchen')} className="showcase-category">
              <img src="/product-category/homeappliance.jpg" alt="img" />
            </div>
            <div onClick={() =>navigate('/products/entertainment')} className="showcase-category">
              <img src="/product-category/cooling.jpg" alt="img" />
            </div>
            <div onClick={() =>navigate('/products/entertainment')} className="showcase-category">
              <img src="/product-category/entertainment.png" alt="img" />
            </div>
            <div onClick={() =>navigate('/products/miscellaneous')} className="showcase-category">
              <img src="/product-category/commercial.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-showcase">
      <div className="mobile-showcase-layout">
        <div className="mobile-showcase-top-container">
          <div onClick={() =>navigate('/products/kitchen')} ref={mobileCategoryTopRef1} className={`mobile-showcase-category ${mobileCategoryTopInView1 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/homeappliance.jpg" alt="img" />
          </div>
          <div onClick={() =>navigate('/products/entertainmen')} ref={mobileCategoryTopRef2} className={`mobile-showcase-category ${mobileCategoryTopInView2 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/entertainment.png" alt="img" />
          </div>
        </div>
        <div className="mobile-showcase-mid-container">
          <div ref={mobileCategoryMidRef} className={`mobile-showcase-mid ${mobileCategoryMidInView ? "slide-mobile-category" : ""}`}>
            <img src="/left-showcasebg.jpg" alt="img" />
          </div>
        </div>
        <div className="mobile-showcase-bottom-container">
          <div onClick={() =>navigate('/products/entertainment')} ref={mobileCategoryBottomRef1} className={`mobile-showcase-category ${mobileCategoryBottomInView1 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/cooling.jpg" alt="img" />
          </div>
          <div onClick={() =>navigate('/products/miscellaneous')} ref={mobileCategoryBottomRef2} className={`mobile-showcase-category ${mobileCategoryBottomInView2 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/commercial.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
        <Footer/>
    </div>
  );
};
export default AllProducts;
