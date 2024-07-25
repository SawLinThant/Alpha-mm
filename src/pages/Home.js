import { useInView } from "react-intersection-observer";
import Catalouge from "../components/catalouge";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/home.css";
import { branch } from "../config/branch";
import BrachDescription from "../components/branch-description.-box";

const Home = () => {
  const KITCHEN_ITEMS = [
    {
      id: "1",
      name: "Electric Kettles",
    },
    {
      id: "2",
      name: "Microwave Ovens",
    },
    {
      id: "3",
      name: "Blenders",
    },
  ];
  const { ref: showcaseLeftRef, inView: showcaseLeftInView } = useInView({
    triggerOnce: false,
  });

  const { ref: showcaseRightRef, inView: showcaseRightInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="home-container">
      <section className="hero-container">
        <div className="hero"></div>
      </section>
      <section className="mvp-container">
        <section className="mvp">
          <div className="mvp-description">
            <div className="mvp-heading">
              <h1>Hello, We are </h1>
              <h1>Official Distributor & Retailer</h1>
            </div>
            <div className="mvp-text">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
            <div className="mvp-button">
              <a href="/">Read More</a>
            </div>
          </div>
          <div className="mvp-image-container">
            <div className="mvp-image"></div>
            <div className="mvp-image"></div>
            <div className="mvp-image"></div>
          </div>
        </section>
      </section>
      <section className="showcase">
        <div
          ref={showcaseLeftRef}
          className={`showcase-left ${
            showcaseLeftInView ? "animate-left" : ""
          }`}
        >
          <div className="showcase-left-img">
            <div className="showcaseleft-img-text">
              <p>Discover Your</p>
              <p>Perfect Home</p>
              <p>Appliances</p>
              <div className="left-img-button-container">
                <a href="/">All Products</a>
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
          <div className="catalouge-container">
            <Catalouge Items={KITCHEN_ITEMS} />
          </div>
          <div className="catalouge-container">
            <Catalouge Items={KITCHEN_ITEMS} />
          </div>
          <div className="catalouge-container">
            <Catalouge Items={KITCHEN_ITEMS} />
          </div>
          <div className="catalouge-container">
            <Catalouge Items={KITCHEN_ITEMS} />
          </div>
        </div>
      </section>
      <section className="advertise-container">
        <div className="download-container">
          <div className="icon"></div>
          <div className="download-description">
            <h1>Get the App Today!</h1>
            <div className="download-text">
              <p>Discover convenience at your fingertips with our app!</p>
              <p>Enjoy seamless navigation, exclusive features, and</p>
              <p>instant updates. Download now and elevate your </p>
              <p>experience!</p>
            </div>
            <div className="download-app-icon">
              <div className="playstore"><li className="playstore-link"></li></div>
              <div className="apple"><li className="apple-link"></li></div>
            </div>
          </div>
        </div>
        <div className="badge-container">
          <div className="property-logo easy">
            <div className="property-logo-container">
              <div className="easy-image"></div>
              <p>Easy Download</p>
            </div>
          </div>
          <div className="property-logo simple">
            <div className="property-logo-container">
              <div className="simple-image"></div>
              <p>Simple Order</p>
            </div>
          </div>
          <div className="property-logo effortless">
            <div className="property-logo-container">
              <div className="effortless-image"></div>
              <p>Effortless Join Partner</p>
            </div>
          </div>
        </div>
        <div className="find-us-container">
          <div className="find-us">
            <div className="find-us-section find-us-text">
              <h2>Find us</h2>
              <div className="find-us-descritpion">
                <p>
                  Discover and connect with nearby showrooms and service centers
                  with ease. Our platform lets you search by location, providing
                  detailed maps and directions for your convenience
                </p>
              </div>
            </div>
            {branch.map((branch) => (
              <div key={branch.id} className="find-us-section">
                <BrachDescription
                  name={branch.name}
                  location={branch.location}
                  phone={branch.phone}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
