import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../../components/admin-sidebar";
import "../../style/dashboard.css";
import ManageProduct from "./product-cms";
import CreateProduct from "./createproduct";
import ProductDetail from "./detail/[id]";
import Message from "./message";

const Dashboard = () => {

  return (
    <>
    <div className="feature-restrict-label">
        <p>This feature is not supported for mobile devices yet!</p>
      </div>
    <div className="dashboard-container">
      <AdminSidebar />
      <div className="dashboard-right-side">
        <div className="dashboard-right-side-layout">
        <Routes>
          <Route path="*" element={<ManageProduct />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route path="message" element={<Message/>} />
        </Routes>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default Dashboard;
