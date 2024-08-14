import { useState } from "react";
import "../../style/adminsidebar.css";
import AlphaLogo from "../../modules/icons/alpha-logo";
import { LuArrowRightFromLine } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { SiGooglemessages } from "react-icons/si";

const AdminSidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <aside className={`${isCollapse ? "ops-sidebar-collapse" : ""}`}>
      <div className="side-layout">
        <div className="ops-sidebar-container">
          <div
            className={`collapse-button-container ${
              isCollapse
                ? "collapse-button-container-collapsed"
                : "collapse-button-container-not-collapsed"
            }`}
          >
            <button
              className={`collapse-button ${
                isCollapse ? "collapse-state-button" : ""
              }`}
              onClick={handleCollapse}
            >
              <BsArrowBarLeft size={20} color="white" />
            </button>
          </div>
          <div className="profile-contianer">
            <div className="profile-layout">
              <div className="profile-pic-container">
                <div className="profile-img">
                  <img src="/alpha-logo.png" alt="alpha-logo" />
                  {/* <h2>A</h2> */}
                </div>
              </div>
              <div className="email-container">
              {!isCollapse?(<p>Alpha Electroincs</p>):(<div></div>)}  
              </div>
            </div>
          </div>
          <div className="ops-sidebar-lists">
            <div className="sidebar-nav-container">
              <div className="ops-sidebar-list">
                <a
                  href="/dashboard"
                  // className={`ops-sidebarlist-link ${isCollapse ? "" : "not-collopase-lis"}`}
                  className="ops-sidebarlist-link"
                >
                  <AiOutlineProduct color="white"/>
                  {!isCollapse && (
                    <p
                      className={`ops-sidebarlist-link-text ${
                        isCollapse ? "" : "not-collopase-list-text"
                      }`}
                    >
                      Product
                    </p>
                  )}
                </a>
              </div>
              {/* <div className="ops-sidebar-list">
                <a
                  href="/dashboard/message"
                  // className={`ops-sidebarlist-link ${isCollapse ? "" : "not-collopase-lis"}`}
                  className="ops-sidebarlist-link"
                >
                  <SiGooglemessages color="white"/>
                  {!isCollapse && (
                    <p
                      className={`ops-sidebarlist-link-text ${
                        isCollapse ? "" : "not-collopase-list-text"
                      }`}
                    >
                      Message
                    </p>
                  )}
                </a>
              </div> */}
            </div>

            <div className="ops-sidebar-list">
              <button onClick={handleLogout} className="ops-sidebarlist-link">
                <GrLogout color="white"/>{" "}
                {!isCollapse && (
                  <p
                    className={`ops-sidebarlist-link-text ${
                      isCollapse ? "" : "not-collopase-list-text"
                    }`}
                  >
                    Logout
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default AdminSidebar;
