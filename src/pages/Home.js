import { useInView } from "react-intersection-observer";
import Catalouge from "../components/catalouge";
import "../style/home.css";
import { branch } from "../config/branch";
import BrachDescription from "../components/branch-description.-box";
import ProgressBarSlider from "../components/slider-progress-style";
import PlayStore from "../modules/icons/playstore";
import AppleStore from "../modules/icons/apple-store";
import PhoneOne from "../modules/icons/phone-one";
import PhoneTwo from "../modules/icons/phone-two";
import ThumbsUp from "../modules/icons/thumbsup";
import Smile from "../modules/icons/smile";
import JoinHand from "../modules/icons/joinhand";
import Header from "../components/Header";
import Footer from "../components/footer";
import RightArrrow from "../modules/icons/rightarrow";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const KITCHEN_ITEMS = [
    {
      id: "1",
      name: "Kitchens",
      items: {
        itemone: "Electric Kettles",
        itemtwo: "Microwave Ovens",
        itemthree: "Blenders",
      },
      img_url: "/kitchen.png",
      product_link: "/products/kitchen",
    },

    {
      id: "2",
      name: "Laundry",
      items: {
        itemone: "Washing Machines",
        itemtwo: "Dryers",
        itemthree: "Steamers",
      },
      img_url: "/laundry.png",
      product_link: "/products/laundry",
    },

    {
      id: "3",
      name: "Entertainments",
      items: {
        itemone: "Televisions",
        itemtwo: "Sound Systems",
      },
      img_url: "/entertainment.jpg",
      product_link: "/products/entertainment",
    },

    {
      id: "4",
      name: "Miscellaneous",
      items: {
        itemone: "Water Purifiers",
        itemtwo: "Air Purifiers",
      },
      img_url: "/miscellaneous.jpg",
      product_link: "/products/miscellaneous",
    },
  ];

  const { ref: showcaseLeftRef, inView: showcaseLeftInView } = useInView({
    triggerOnce: false,
  });

  const { ref: showcaseRightRef, inView: showcaseRightInView } = useInView({
    triggerOnce: false,
  });

  const { ref: downloadButtonRef, inView: downloadButtonInView } = useInView({
    triggerOnce: false,
  });

  const { ref: badgeRef, inView: badgeInView } = useInView({
    triggerOnce: false,
  });

  const { ref: mobileCategoryTopRef1, inView: mobileCategoryTopInView1 } =
    useInView({
      triggerOnce: false,
    });
  const { ref: mobileCategoryTopRef2, inView: mobileCategoryTopInView2 } =
    useInView({
      triggerOnce: false,
    });
  const { ref: mobileCategoryMidRef, inView: mobileCategoryMidInView } =
    useInView({
      triggerOnce: false,
    });
  const { ref: mobileCategoryBottomRef1, inView: mobileCategoryBottomInView1 } =
    useInView({
      triggerOnce: false,
    });
  const { ref: mobileCategoryBottomRef2, inView: mobileCategoryBottomInView2 } =
    useInView({
      triggerOnce: false,
    });

  return (
    <div className="home-container" style={{ backgroundColor: "#B1B3B6" }}>
      <Header />
      <section className="hero-container">
        <div className="hero">
          <ProgressBarSlider />
        </div>
      </section>
      <section className="mvp-container">
        <section className="mvp">
          <div className="mvp-description">
            <div className="mvp-heading">
              {/* <h3>Hello, We are </h3> */}
              <h2>Why you should be our partner?</h2>
            </div>
            <div className="mvp-text">
              <p>
              Being a reputable electronic company in Myanmar, we
                    understand the needs of local consumers well and have been
                    satisfying those with high quality electronics products at
                    affordable prices to keep abreast of latest innovations and
                    technology of the world. We value and preserve a sense of
                    excellent after sales service by understanding customers’
                    concerns to provide prompt and effective solutions.
              </p>
              {/* <p className="bottom-paragraph">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p> */}
            </div>
            <div className="mvp-button">
              <a href="/aboutus">
                <p>Read More</p>
                <RightArrrow width={24} height={24} />
              </a>
            </div>
          </div>
          <div className="mvp-image-container">
            <div className="mvp-image">
              <img src="/images/mvp.jpg" alt="mvp1" />
            </div>
          </div>
        </section>
      </section>
      <section className="showcase">
        <div className="showcase-layout">
          <div
            ref={showcaseLeftRef}
            className={`showcase-left ${
              showcaseLeftInView ? "animate-left" : ""
            }`}
          >
            <div className="showcase-left-img">
              <div className="showcaseleft-img-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="left-img-button-container">
                  <a href="/productbycategory/home appliance">
                    <p>View All</p>
                    <RightArrrow width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={showcaseRightRef}
            className={`showcase-right ${
              showcaseRightInView ? "animate-right" : ""
            }`}
          >
            {/* <Catalouge Items={KITCHEN_ITEMS} /> */}

            <div
              onClick={() => navigate("/productbycategory/home appliance")}
              className="showcase-category"
            >
              <img src="/product-category/home-appliance2.jpg" alt="img" />
            </div>
            <div
              onClick={() => navigate("/productbycategory/cooling electronics")}
              className="showcase-category"
            >
              <img src="/product-category/cooling2.jpg" alt="img" />
            </div>
            <div
              onClick={() => navigate("/productbycategory/entertainment")}
              className="showcase-category"
            >
              <img src="/product-category/entertainment2.jpg" alt="img" />
            </div>
            <div
              onClick={() =>
                navigate("/productbycategory/commercial electronics")
              }
              className="showcase-category"
            >
              <img src="/product-category/commercial2.jpg" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-showcase">
        <div className="mobile-showcase-layout">
          <div className="mobile-showcase-top-container">
            <div
              onClick={() => navigate("/productbycategory/home appliance")}
              ref={mobileCategoryTopRef1}
              className={`mobile-showcase-category ${
                mobileCategoryTopInView1 ? "slide-mobile-category" : ""
              }`}
            >
              <img src="/product-category/homeappliance.jpg" alt="img" />
            </div>
            <div
              onClick={() => navigate("/productbycategory/entertainment")}
              ref={mobileCategoryTopRef2}
              className={`mobile-showcase-category ${
                mobileCategoryTopInView2 ? "slide-mobile-category" : ""
              }`}
            >
              <img src="/product-category/entertainment.jpg" alt="img" />
            </div>
          </div>
          <div className="mobile-showcase-mid-container">
            <div
              ref={mobileCategoryMidRef}
              className={`mobile-showcase-mid ${
                mobileCategoryMidInView ? "slide-mobile-category" : ""
              }`}
            >
              {/* <img src="/left-showcasebg.jpg" alt="img" /> */}
              <div className="mobile-showcase-mid-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="mobile-showcase-mid-img-button-container">
                  <a href="/productbycategory/home appliance">
                    <p>View All</p>
                    <RightArrrow width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-showcase-bottom-container">
            <div
              onClick={() => navigate("/productbycategory/cooling electronics")}
              ref={mobileCategoryBottomRef1}
              className={`mobile-showcase-category ${
                mobileCategoryBottomInView1 ? "slide-mobile-category" : ""
              }`}
            >
              <img src="/product-category/cooling.jpg" alt="img" />
            </div>
            <div
              onClick={() =>
                navigate("/productbycategory/commercial electronics")
              }
              ref={mobileCategoryBottomRef2}
              className={`mobile-showcase-category ${
                mobileCategoryBottomInView2 ? "slide-mobile-category" : ""
              }`}
            >
              <img src="/product-category/commercial.jpg" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="advertise-container">
        <div className="download-container">
          <div className="icon">
            <div className="phone-icon-container">
              {/* <div className="phone-icon1">
                <img src="/ph1.png" />
              </div>
              <div className="phone-icon2">
                <img src="/ph2.png" />
              </div> */}
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
                src="/images/app-img.png"
                alt=""
              />
            </div>
          </div>
          <div className="download-description">
            <h2>Get the App Today!</h2>
            <div className="download-text">
              <p>
                The brand-new ALPHA app can be downloaded easily from both App
                Store or Google Play Store. Grab it now to enjoy seamless
                navigation, exclusive features such as intuitive new utility
                dashboard, and instant updates.
              </p>
              {/* <p>Discover convenience at your fingertips with our app!</p>
              <p>Enjoy seamless navigation, exclusive features, and</p>
              <p>instant updates. Download now and elevate your </p>
              <p>experience!</p> */}
            </div>
            <div className="download-app-icon">
              <div className="playstore-container">
                <div
                  ref={downloadButtonRef}
                  className={`playstore ${
                    downloadButtonInView ? "download-button-grow" : ""
                  }`}
                >
                  <li className="playstore-link">
                    <a href="/">
                      <PlayStore width={180} height={57} />
                    </a>
                  </li>
                </div>
              </div>
              <div className="apple-container">
                <div
                  ref={downloadButtonRef}
                  className={`apple ${
                    downloadButtonInView ? "download-button-grow" : ""
                  }`}
                >
                  <li className="apple-link">
                    <a href="/">
                      <AppleStore width={180} height={57} />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={badgeRef}
          className={`badge-container ${
            badgeInView ? "badge-container-open" : ""
          }`}
        >
          <div className="property-logo easy">
            <div className="property-logo-container">
              <div className="easy-image">
                <ThumbsUp width={50} height={50} />
              </div>
              <p>Easy Download</p>
            </div>
          </div>
          <div className="property-logo simple">
            <div className="property-logo-container">
              <div className="simple-image">
                <Smile width={50} height={50} />
              </div>
              <p>Simple Order</p>
            </div>
          </div>
          <div className="property-logo effortless">
            <div className="property-logo-container">
              <div className="effortless-image">
                <JoinHand width={50} height={50} />
              </div>
              <p>Effortless Join Partner</p>
            </div>
          </div>
        </div>
        <div className="find-us-container">
          <div className="find-us">
            <div className="find-us-text">
              <h2>Find us</h2>
              <div className="find-us-descritpion">
                <p>
                  Discover and connect with nearby showrooms and service centers
                  with ease. Search by locations, providing detailed maps,
                  directions for your convenience.
                </p>
              </div>
            </div>
            <div className="branch-container">
              {branch.map((branch) => (
                <div key={branch.id} className="find-us-section">
                  <BrachDescription
                    name={branch.name}
                    buttontext={branch.buttontext}
                    img_url={branch.img_url}
                    route={branch.route}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
