import { useState } from "react";
import "../../style/adminsidebar.css";
import AlphaLogo from "../../modules/icons/alpha-logo";
import { LuArrowRightFromLine } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";

const AdminSidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  }
  return (
    <aside className={`${isCollapse?"ops-sidebar-collapse":""}`}>
      <div className="side-layout">
        <div className="ops-sidebar-container">
          <div className={`collapse-button-container ${isCollapse?"collapse-button-container-collapsed":"collapse-button-container-not-collapsed"}`}>
            <button className={`collapse-button ${isCollapse?"collapse-state-button":""}`} onClick={handleCollapse}><BsArrowBarLeft size={20}/></button>
          </div>
          <div className={`side-logo-container ${isCollapse?"ops-sidebar-container-collapse":""}`}>
            {/* {!isCollapse && <AlphaLogo width={200} height={75} />} */}
          </div>
          <div className="ops-sidebar-lists">
            <div className="ops-sidebar-list">
              <a
                href="/"
               // className={`ops-sidebarlist-link ${isCollapse ? "" : "not-collopase-lis"}`}
               className="ops-sidebarlist-link"
              >
                <AiOutlineProduct />
                {!isCollapse && <p className={`ops-sidebarlist-link-text ${isCollapse ? "" : "not-collopase-list-text"}`}>Product</p>}
                {/* <p className={`ops-sidebarlist-link-text ${isCollapse ? "collopase-list-text" : "not-collopase-list-text"}`}>Product</p> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default AdminSidebar;
