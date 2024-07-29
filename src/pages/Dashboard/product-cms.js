import CustomTable from "../../components/custom-table";
import { FaPlus } from "react-icons/fa";
import "../../style/productcms.css"
import { useNavigate } from "react-router-dom";

const ManageProduct = () => {
    const navigate = useNavigate()
    const handleClickCreate = () => {
       navigate('createproduct')
    }
    return(
        <div className="product-cms-container">
            <div className="table-heading">
                <button onClick={handleClickCreate}><FaPlus /><p>Add New Product</p></button>
            </div>
            <div className="table-container">
                <CustomTable/>
            </div>
        </div>
    )
}
export default ManageProduct;