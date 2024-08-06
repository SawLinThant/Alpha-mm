import CustomTable from "../../components/custom-table";
import { FaPlus } from "react-icons/fa";
import "../../style/productcms.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "../../graphql/queries/productQueries";
import LoadingButton from "../../modules/icons/loading-button";
import { useEffect, useState } from "react";
import CustomDropdownFilter from "../../components/custom-dropdown";

const ManageProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [category,setCategory] = useState('all');
  const handleClickCreate = () => {
    navigate("createproduct");
  };
  console.log(category)
  const [ getProducts ,{ data, loading, error, refetch }] = useLazyQuery(GET_PRODUCTS);
  const [getProductsByCategory, {data:filterData, loading:filterLoading,error:filterError}] = useLazyQuery(GET_PRODUCTS_BY_CATEGORY);

  useEffect(() => {
    if (location.state?.refetch) {
      refetch();
    }
  }, [location.state, refetch]);

  useEffect(() => {
    if(category === '' || category === 'all'){
      getProducts();
    }else{
      getProductsByCategory({
        variables:{category}
      })
    }
  },[category,getProducts, getProductsByCategory])

  const tableData = category === '' || category === 'all' ? (data ? data.product : []) : (filterData ? filterData.product : []);
  const isLoading = loading || filterLoading

  console.log(tableData)

  if(filterError) return <div>Filter Error</div>
  if (isLoading)
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
        <CustomDropdownFilter setCategory={setCategory}/>
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
