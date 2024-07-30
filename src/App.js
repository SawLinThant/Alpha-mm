import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/product";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Dashboard/login";
import { useState } from "react";

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
        <Route path="contactus" element={<ContactUs />} />
        <Route path="products" element={<Product />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
