import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/product/index";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Dashboard/login";
import { useState } from "react";
import Service from "./pages/Service";
import Store from "./pages/store";
import ProductDetail from "./pages/ProductDetail/[id]";
import ProductByCategory from "./pages/prouductbycategory/[category]";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const ProtectedRoutes = () => {
    return !isLogin && !user ? <Navigate to="/login" /> : <Outlet />;
  };
  return (
    <>
      <Routes>
        <Route path="login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="*" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="productbycategory/:category" element={<ProductByCategory />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="products/*" element={<Product />} />
        <Route path="service" element={<Service />} />
        <Route path="store" element={<Store />} />
        <Route path="products/productdetail/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
