import CustomTable from "../../components/custom-table";
import { FaPlus } from "react-icons/fa";
import "../../style/productcms.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries/productQueries";
import LoadingButton from "../../modules/icons/loading-button";
import { useEffect } from "react";

const ManageProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClickCreate = () => {
    navigate("createproduct");
  };
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);
  useEffect(() => {
    if (location.state?.refetch) {
      refetch();
    }
  }, [location.state, refetch]);
  const tableData = data ? data.product : [];
  console.log(tableData);
  if (loading)
    return (
      <div
        role="status"
        style={{
          width: "100px",
          height: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <LoadingButton />
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (error) return <div>Error loading data.</div>;
  return (
    <div className="product-cms-container">
      <div className="table-heading">
        <button onClick={handleClickCreate}>
          <FaPlus />
          <p>Add New Product</p>
        </button>
      </div>
      <div className="table-container">
        <CustomTable data={tableData} />
      </div>
    </div>
  );
};
export default ManageProduct;
