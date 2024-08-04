import { Routes,Route } from "react-router-dom"
import Products from "./[category]";

const Product = () => {
    return(
        <div>
            <Routes>
                <Route path="*" element={<Products/>}/>
                <Route path="/:category" element={<Products/>}/>
            </Routes>
        </div>
    )
}

export default Product;