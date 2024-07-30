import CustomTable from "../../components/custom-table";
import { FaPlus } from "react-icons/fa";
import "../../style/productcms.css"
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries/productQueries";

const ManageProduct = () => {
    const navigate = useNavigate()
    const handleClickCreate = () => {
       navigate('createproduct')
    }
    const {data,loaidng,error} = useQuery(GET_PRODUCTS)
   const tableData = data? data.product: []
   console.log(tableData)
   if(loaidng) return <div>Loading Data</div>
   if (error) return <div>Error loading data.</div>;
    return(
        <div className="product-cms-container">
            <div className="table-heading">
                <button onClick={handleClickCreate}><FaPlus /><p>Add New Product</p></button>
            </div>
            <div className="table-container">
                <CustomTable data={tableData}/>
            </div>
        </div>
    )
}
export default ManageProduct;