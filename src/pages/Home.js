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

const Home = () => {
  const KITCHEN_ITEMS = [
    {
      id: "1",
      name: "Kitchens",
      items: {
        itemone:"Electric Kettles",
        itemtwo:"Microwave Ovens",
        itemthree:"Blenders",
      },
      img_url: "/kitchen.png",
      product_link: "/products/kitchen"
    },
   
    {
      id: "2",
      name: "Laundry",
      items: {
        itemone:"Washing Machines",
        itemtwo:"Dryers",
        itemthree:"Steamers",
      },
      img_url: "/laundry.png",
      product_link: "/products/laundry"
    },

    {
      id: "3",
      name: "Entertainments",
      items: {
        itemone:"Televisions",
        itemtwo:"Sound Systems",
      },
      img_url: "/entertainment.png",
      product_link: "/products/entertainment"
    },

    {
      id: "4",
      name: "Miscellaneous",
      items: {
        itemone:"Water Purifiers",
        itemtwo:"Air Purifiers",
      },
      img_url: "/miscellaneous.png",
      product_link: "/products/miscellaneous"
    },
  ];
  const SHOWCASES = [
    {
      id: "1",
      image_url: "/product-category/homeappliance.jpg"
    },
    {
      id: "2",
      image_url: "/product-category/cooling.lpg"
    },
    {
      id: "3",
      image_url: "/product-category/entertainment.jpg"
    },
    {
      id: "4",
      image_url: "/product-category/commercial.jpg"
    }
  ]
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

  return (
    <div className="home-container">
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
              <h3>Hello, We are </h3>
              <h2>Official Distributor & Retailer</h2>
            </div>
            <div className="mvp-text">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
              <p className="bottom-paragraph">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
            <div className="mvp-button">
              <a href="/">
              <p>Read More</p><RightArrrow width={24} height={24}/>
              </a>
            </div>
          </div>
          <div className="mvp-image-container">
            <div className="mvp-image">
              <img src="/mvpimg.jpg" alt="mvp1" />
            </div>
            {/* <div className="mvp-image">
              <img src="/mvp2.jpg" alt="mvp2" />
            </div>
            <div className="mvp-image">
              <img src="/mvp3.jpg" alt="mvp3" />
            </div> */}
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
              <img src="/left-showcasebg.jpg" alt=""/>
              {/* <div className="showcaseleft-img-text">
                <h2>Discover Your Perfect Home Appliance</h2>
                <div className="left-img-button-container">
                  <a href="/products">
                  <p>View All</p><RightArrrow width={24} height={24}/>
                  </a>
                </div>
              </div> */}
              <div className="showcase-left-image-icon"></div>
            </div>
          </div>
          <div
            ref={showcaseRightRef}
            className={`showcase-right ${
              showcaseRightInView ? "animate-right" : ""
            }`}
          >
            {/* <Catalouge Items={KITCHEN_ITEMS} /> */}
            
              <div className="showcase-category">
                <img src='/product-category/homeappliance.jpg' alt="img"/>
              </div>
              <div className="showcase-category">
                <img src='/product-category/cooling.jpg' alt="img"/>
              </div>
              <div className="showcase-category">
                <img src='/product-category/entertainment.png' alt="img"/>
              </div>
              <div className="showcase-category">
                <img src='/product-category/commercial.png' alt="img"/>
              </div>
            
          </div>
        </div>
      </section>
      <section className="advertise-container">
        <div className="download-container">
          <div className="icon">
            <div className="phone-icon-container">
              <div className="phone-icon1">
                <PhoneOne width={320} height={320} />
              </div>
              <div className="phone-icon2">
                <PhoneTwo width={220} height={440} />
              </div>
            </div>
          </div>
          <div className="download-description">
            <h2>Get the App Today!</h2>
            <div className="download-text">
              <p>Discover convenience at your fingertips with our app! Enjoy seamless navigation, exclusive features, and instant updates. Download now and elevate your experience!</p>
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
                      <PlayStore width={194} height={57} />
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
                      <AppleStore width={194} height={57} />
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
                  with ease. Our platform lets you search by location, providing
                  detailed maps and directions for your convenience
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
                />
              </div>
            ))}
            </div>
           
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default Home;
