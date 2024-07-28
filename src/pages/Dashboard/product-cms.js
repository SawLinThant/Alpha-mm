import CustomTable from "../../components/custom-table";
import { FaPlus } from "react-icons/fa";
import "../../style/productcms.css"

const ManageProduct = () => {
    return(
        <div className="product-cms-container">
            <div className="table-heading">
                <button><FaPlus /><p>Add New Product</p></button>
            </div>
            <div className="table-container">
                <CustomTable/>
            </div>
        </div>
    )
}
export default ManageProduct;