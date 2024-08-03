import { Routes,Route } from "react-router-dom"
import Home from "../Home"
import Products from "./[category]";

const Product = () => {
    return(
        <div>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/:category" element={<Products/>}/>
            </Routes>
        </div>
    )
}

export default Product;