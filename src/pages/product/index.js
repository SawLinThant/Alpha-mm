import { Routes,Route } from "react-router-dom"
import Products from "./[category]";
import SubCategory from "./subcategory/[subcategory]";

const Product = () => {
    return(
        <div>
            <Routes>
                <Route path="*" element={<Products/>}/>
                <Route path="/:category" element={<Products/>}/>
                <Route path="/subcategory/:subcategory" element={<SubCategory/>}/>
            </Routes>
        </div>
    )
}

export default Product;