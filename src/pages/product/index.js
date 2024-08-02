import { Routes,Route } from "react-router-dom"
import Home from "../Home"
import KitchenProduct from "./kitchen";

const Product = () => {
    return(
        <div>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="kitchen" element={<KitchenProduct/>}/>
            </Routes>
        </div>
    )
}

export default Product;