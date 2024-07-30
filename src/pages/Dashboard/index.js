import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin-sidebar";
import "../../style/dashboard.css";
import ManageProduct from "./product-cms";
import CreateProduct from "./createproduct";
import { useState } from "react";
import Login from "./login";

const Dashboard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const ProtectedRoutes = () => {
    return !isLogin && !user ? <Navigate to="dashboard/login" /> : <Outlet />;
  };
  return (
    <div className="dashboard-container">
      <AdminSidebar />
      <div className="dashboard-right-side">
        <Routes>
          <Route path="*" element={<ManageProduct />} />
          <Route path="createproduct" element={<CreateProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
