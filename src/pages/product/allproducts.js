import "../../style/product.css";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";
import { GET_CATEGORIES } from "../../graphql/queries/productQueries";
import { useNavigate,useLocation } from "react-router-dom";
import LoadingButton from "../../modules/icons/loading-button";
import PaginationArrowIcon from "../../modules/icons/pagination-arrow";
import { useInView } from "react-intersection-observer";
import Catalouge from "../../components/catalouge";
import RightArrrow from "../../modules/icons/rightarrow";
import { useEffect } from "react";

const AllProducts = () => {
  const navigate = useNavigate();
  const{pathname} = useLocation()
  const itemsPerPage = 4;
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname,pagination])
  

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
    <div style={{backgroundColor:'#B1B3B6', overflow:'hidden'}}>
      <Header />
        <section 
        style={{marginTop:'6rem'}} 
        className="showcase">
        <div className="showcase-layout">
          <div
            ref={showcaseLeftRef}
            className={`showcase-left ${
              showcaseLeftInView ? "animate-left" : ""
            }`}
          >
            <div className="showcase-left-img">
              {/* <img src="/left-showcasebg.jpg" alt="" /> */}
              <div className="showcaseleft-img-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="left-img-button-container">
                  <a href="/productbycategory/home appliance">
                  <p>View All</p><RightArrrow width={24} height={24}/>
                  </a>
                </div>
              </div>
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

            <div onClick={() =>navigate('/productbycategory/home appliance')} className="showcase-category">
              <img src="/product-category/home-appliance2.jpg" alt="img" />
            </div>
            <div onClick={() =>navigate('/productbycategory/cooling electronics')} className="showcase-category">
              <img src="/product-category/cooling2.jpg" alt="img" />
            </div>
            <div onClick={() =>navigate('/productbycategory/entertainment')} className="showcase-category">
              <img src="/product-category/entertainment2.jpg" alt="img" />
            </div>
            <div onClick={() =>navigate('/productbycategory/commercial electronics')} className="showcase-category">
              <img src="/product-category/commercial2.jpg" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-showcase" style={{marginTop:'6rem'}}>
      <div className="mobile-showcase-layout">
        <div className="mobile-showcase-top-container">
          <div onClick={() =>navigate('/productbycategory/home appliance')} ref={mobileCategoryTopRef1} className={`mobile-showcase-category ${mobileCategoryTopInView1 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/homeappliance.jpg" alt="img" />
          </div>
          <div onClick={() =>navigate('/productbycategory/cooling electronics')} ref={mobileCategoryTopRef2} className={`mobile-showcase-category ${mobileCategoryTopInView2 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/entertainment.jpg" alt="img" />
          </div>
        </div>
        <div className="mobile-showcase-mid-container">
          <div ref={mobileCategoryMidRef} className={`mobile-showcase-mid ${mobileCategoryMidInView ? "slide-mobile-category" : ""}`}>
            {/* <img src="/left-showcasebg.jpg" alt="img" /> */}
            <div className="mobile-showcase-mid-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="mobile-showcase-mid-img-button-container">
                  <a href="/productbycategory/home appliance">
                  <p>View All</p><RightArrrow width={24} height={24}/>
                  </a>
                </div>
              </div>
          </div>
        </div>
        <div className="mobile-showcase-bottom-container">
          <div onClick={() =>navigate('/productbycategory/entertainment')} ref={mobileCategoryBottomRef1} className={`mobile-showcase-category ${mobileCategoryBottomInView1 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/cooling.jpg" alt="img" />
          </div>
          <div onClick={() =>navigate('/productbycategory/commercial electronics')} ref={mobileCategoryBottomRef2} className={`mobile-showcase-category ${mobileCategoryBottomInView2 ? "slide-mobile-category" : ""}`}>
            <img src="/product-category/commercial.jpg" alt="img" />
          </div>
        </div>
      </div>
    </section>
        <div className="footer-divider"></div>
        <Footer/>
    </div>
  );
};
export default AllProducts;
