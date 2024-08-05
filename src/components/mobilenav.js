import { useState } from "react";
import "../style/mobilenav.css";
import { LuChevronsRight } from "react-icons/lu";
import { BiHome } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import { CiCircleChevRight } from "react-icons/ci";
import { GoSidebarExpand } from "react-icons/go";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [toggleContent, setToggleContent] = useState("");

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log("clicked")
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

  return (
    <div className="side-bar-container">
      <button
        className="side-button"
        onClick={() => {
          toggleSidebar();
          //setToggleContent("")
        }}
      >
        <GoSidebarExpand size={25}/>
      </button>
      <div className={`side-bar ${isSidebarVisible ? "visible" : ""}`}>
        <div className="top-sidebar">
          <button className="side-button" onClick={toggleSidebar}>
          <LuChevronsRight size={35}/>
          </button>
          {/* <button className="side-button" onClick={closeSidebarContent}>
            Close Side Bar Content
          </button> */}
        </div>

        <div className="mobile-nav-wrap">
          {/* <ul>
            <li>
              <button
                onClick={() => openSidebarContent("mobileProducts")}
                className="mobile-nav-button"
              >
                Home
              </button>
              <div className="side-content-container">
                <div
                  className={`side-content-mobileproduct ${
                    toggleContent === "mobileProducts" ? "" : ""
                  }`}
                >
                  <p></p>
                </div>
              </div>
            </li>
            <li>
              <button
                onClick={() => openSidebarContent("brand")}
                className="mobile-nav-button"
              >
                Proudcts
              </button>
              <div className="side-content-container">
                <div
                  className={`side-content-mobileproduct ${
                    toggleContent === "brand" ? "" : ""
                  }`}
                >
                  <p></p>
                </div>
              </div>
            </li>
            <li>
              <button
                onClick={() => openSidebarContent("ai")}
                className="mobile-nav-button"
              >
                About Us
              </button>
              <div className="side-content-container">
                <div
                  className={`side-content-mobileproduct ${
                    toggleContent === "ai" ? "" : ""
                  }`}
                >
                  <p>Contact Us</p>
                </div>
              </div>
            </li>
            <li>
              <button className="mobile-nav-button">Contact Us</button>
            </li>
          </ul> */}
          <div className="nav-link-container">
          <BiHome /> <a href="/"><p>Home</p><CiCircleChevRight size={20}/></a>
          </div>
          <div className="nav-link-container">
          <FaProductHunt /> <a href="/products/kitchen"><p>Products</p><CiCircleChevRight size={20}/></a>
          </div>
          <div className="nav-link-container">
          <ImProfile /> <a href="/aboutus"><p>About Us</p><CiCircleChevRight size={20}/></a>
          </div>
          <div className="nav-link-container">
          <MdContactPhone /> <a href="/contactus"><p>Contact Us</p><CiCircleChevRight color="#262626" size={20}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
