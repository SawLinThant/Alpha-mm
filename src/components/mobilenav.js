import { useState } from "react";
import "../style/mobilenav.css";
import { LuChevronsRight } from "react-icons/lu";
import { BiHome } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import { CiCircleChevRight } from "react-icons/ci";
import { GoSidebarExpand } from "react-icons/go";
import SidebarToggleIcon from "../modules/icons/sidebar-toggle";
import CrossIcon from "../modules/icons/cross";

const Sidebar = ({ 
  showMore ,
  subCategory,
  Category,
  setSubcategory,
  setIsAllProducts,
  setActiveBtn
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [toggleContent, setToggleContent] = useState("");

  const handleChooseSubcategory = (subcategory) => {
    setSubcategory(subcategory);
    setIsAllProducts(false)
    setActiveBtn();
    setIsSidebarVisible(!isSidebarVisible);
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log("clicked");
    if (isSidebarVisible) {
      setToggleContent("");
    }
  };
  const openSidebarContent = (content) => {
    setToggleContent(content);
    console.log(toggleContent.toString());
  };
  const closeSidebarContent = () => {
    setToggleContent("");
    console.log("no content");
  };

  console.log(subCategory)

  return (
    <div className="side-bar-container">
      <button
        className="side-button"
        onClick={() => {
          toggleSidebar();
          //setToggleContent("")
        }}
      >
        <SidebarToggleIcon width={25} height={25} color={`${showMore?'#262626':'#9394E0'}`} />
      </button>
      <div className={`side-bar ${isSidebarVisible ? "visible" : ""}`}>
        <div className="top-sidebar">
          <button className="inner-side-button" onClick={toggleSidebar}>
            {/* <LuChevronsRight size={35} /> */}<CrossIcon height={24} width={24}/>
          </button>
          {/* <button className="side-button" onClick={closeSidebarContent}>
            Close Side Bar Content
          </button> */}
        </div>
        {!showMore ? (
          <div className="mobile-nav-wrap">
            <div className="nav-link-container">
              {/* <BiHome />{" "} */}
              <a href="/">
                <p>Home</p>
                {/* <CiCircleChevRight size={20} /> */}
              </a>
            </div>
            <div className="nav-link-container">
              {/* <FaProductHunt />{" "} */}
              <a href="/products">
                <p>Products</p>
                {/* <CiCircleChevRight size={20} /> */}
              </a>
            </div>
            <div className="nav-link-container">
              {/* <ImProfile />{" "} */}
              <a href="/aboutus">
                <p>About Us</p>
                {/* <CiCircleChevRight size={20} /> */}
              </a>
            </div>
            <div className="nav-link-container">
              {/* <MdContactPhone />{" "} */}
              <a href="/contactus">
                <p>Contact Us</p>
                {/* <CiCircleChevRight color="#262626" size={20} /> */}
              </a>
            </div>
          </div>
        ) : (
          <div className="mobile-nav-category-wrap">
            <h2>{Category}</h2>
            <div className="mobile-nav-category-list-container">
              <button onClick={() => {setIsAllProducts(true); setIsSidebarVisible(!isSidebarVisible)} }>All</button>
              {subCategory && subCategory.map((subcategory,index)=> {
                return(
                  <button onClick={() => handleChooseSubcategory(subcategory.subcategory_name)} key={index}>{subcategory.subcategory_name}</button>
                )              
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
