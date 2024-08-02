import { useQuery } from "@apollo/client";
import {
  GET_PRODUCTS_BY_SUBCATEGORY
} from "../../graphql/queries/productQueries";
import "../../style/product.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const KitchenProduct = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_SUBCATEGORY, {
    variables: { subcategory: "kettle" }, 
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header />
      <div className="product-sub-nav-link">
        <div className="product-sub-nav-link-layout">
          <p>Home</p>
          <span>/</span>
          <p style={{ color: "#4A4CCD" }}>Kitchen</p>
        </div>
      </div>
      <section className="product-container">
        <div className="product-container-layout">
          <h2>Electric kettle</h2>
          <div className="products-container">
            {data.product.map((product) => (
                <div className="individual-product-container">
              <div className="product-image-container">
                <img src={product.image_url} alt="" />
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default KitchenProduct;
