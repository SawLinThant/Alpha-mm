import "../style/product.css"

const Product = () => {
    return(
        <div>
            <section className="product-container">
                <div className="product-container-layout">
                    <h2>Electric kettle</h2>
                    <div className="products-container">
                        <div className="individual-product-container">
                            <div className="product-image-container"></div>
                        </div>
                        <div className="individual-product-container"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Product