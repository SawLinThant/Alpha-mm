import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./[category]";
import SubCategory from "./subcategory/[subcategory]";

const Product = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/kitchen" />} />
        <Route path="*" element={<Products />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/subcategory/:subcategory" element={<SubCategory />} />
        <Route path="*" element={<Navigate to="/kitchen" />} />
      </Routes>
    </div>
  );
};

export default Product;
