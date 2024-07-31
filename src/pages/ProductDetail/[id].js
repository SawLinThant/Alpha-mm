import "../../style/productdetail.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DirectionIcon from "../../modules/icons/direction";

const ProductDetail = () => {
  return (
    <div>
      <Header />
      <div className="prodcut-detail-container">
        <div className="product-detail-layout">
          <div className="product-detail-images-container">
            <div className="product-subimg-container">
              <div className="product-subimg">
                <img src="/product2.png" alt="sub-img" />
              </div>
              <div className="product-subimg">
              <img src="/product3.png" alt="sub-img" />
              </div>
              <div className="product-subimg">
              <img src="/product4.png" alt="sub-img" />
              </div>
            </div>
            <div className="product-mainimg-container">
                <img src="/product1.png" alt="main-img" />
            </div>
            <div className="product-mvp-container">
              <div className="product-mvp-heading">
                <div className="product-heading">
                    <h4>Electric Kettle ALKTL170</h4>
                </div>
                <div className="prodcut-sub-heading">
                    <p>Brand: <span className="brand-name">Alpha</span></p>
                    <div className="price">KS <span className="price-number">38,000</span></div>
                </div>
              </div>
              <div className="product-mvp-text">
                <p>
                  -ရေစစ်ပါဝင်တဲ့အတွက် မတော်တဆ ပါဝင်သော အမှုန်အမွှားများကို
                  ဖယ်ရှားပေးနိုင်။
                </p>
                <p>
                  -အဖုံးအဖွင့်/အပိတ်အတွက်ကို အပူမလောင်စေရန် လက်ကိုင်တွင်
                  ခလုတ်ပါရှိ။
                </p>
                <p>
                  -ရေချိန်တိုင်း ကိရိယာကြောင့် ဖွင့်/ပိတ် လိုက်လုပ်စရာမလိုပဲ
                  ရေရှိ/မရှိ ကြည့်နိုင်။
                </p>
                <p>
                  -မတော်တဆရွေ့လျားမသွားအောင် အောက်ခံရာဘာအလုံးတွေမှ
                  ထိန်းညှိထားပေး။
                </p>
                <p> -1.7L ထိရေဖြည့်နိုင်။</p>
              </div>
              <div className="product-mvp-button">
                <button>
                    <p>Find Store Location</p>
                    <DirectionIcon width={24} height={24}/>
                </button>
              </div>
            </div>
          </div>
          <div className="product-bottom-description-container">
            <h1>Product details of Alpha 1.7L Electric Kettle ALKT170L</h1>
            <div className="description-list-container">
                <ul>
                    <li>Power – 1500W</li>
                    <li>Capacity – 1.7L</li>
                    <li>Size – 24.5×17×22.5cm</li>
                    <li>Net Weight – 0.94Kg</li>
                    <li>Water Filter</li>
                    <li>Safe To Open The Lid By Button</li>
                    <li>Water Level Scale</li>
                    <li>Manual Switch</li>
                    <li>360-degree Rotation</li>
                    <li>One Year Warranty</li>
                </ul>
            </div>
          </div>
          <div className="related-products-container">
            <h1>Related Products</h1>
            <div className="related-products">
                <div className="related-products-layout">
                    <div className="related-product-layout">
                    <div className="related-product"></div>
                    <div className="related-product"></div>
                    <div className="related-product"></div>
                    <div className="related-product"></div>
                   </div>                    
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
