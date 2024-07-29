import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../../components/admin-sidebar";
import "../../style/dashboard.css"
import ManageProduct from "./product-cms";
import CreateProduct from "./createproduct";

const Dashboard = () => {
    return(
        <div className="dashboard-container">
            <AdminSidebar/>
            <div className="dashboard-right-side">
            <Routes>
                <Route path="*" element={<ManageProduct/>}/>
                <Route path="createproduct" element={<CreateProduct/>}/>
            </Routes>
            </div>
        </div>
      
    )
}

export default Dashboard;