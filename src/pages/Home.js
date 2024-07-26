import { useInView } from "react-intersection-observer";
import Catalouge from "../components/catalouge";
import "../style/home.css";
import { branch } from "../config/branch";
import BrachDescription from "../components/branch-description.-box";
import ProgressBarSlider from "../components/slider-progress-style";
import PlayStore from "../modules/icons/playstore";
import AppleStore from "../modules/icons/apple-store";

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

  const { ref: downloadButtonRef, inView: downloadButtonInView } = useInView({
    triggerOnce: false,
  });

  const { ref: badgeRef, inView: badgeInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="home-container">
      <section className="hero-container">
        <div className="hero">
          <ProgressBarSlider/>
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
              <a href="/">Read More <span>&rarr;</span></a>
            </div>
          </div>
          <div className="mvp-image-container">
            {/* <div className="mvp-image"></div>
            <div className="mvp-image"></div>
            <div className="mvp-image"></div> */}
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
                  <a href="/">View All <span>&rarr;</span></a>
                </div>
              </div>
              <div className="showcase-left-image-icon"></div>
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
        </div>
      </section>
      <section className="advertise-container">
        <div className="download-container">
          <div className="icon"></div>
          <div className="download-description">
            <h2>Get the App Today!</h2>
            <div className="download-text">
              <p>Discover convenience at your fingertips with our app!</p>
              <p>Enjoy seamless navigation, exclusive features, and</p>
              <p>instant updates. Download now and elevate your </p>
              <p>experience!</p>
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
                    <a href="/"><PlayStore width={194} height={57}/></a>
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
                  <a href="/"><AppleStore width={194} height={57}/></a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={badgeRef} className={`badge-container ${badgeInView?"badge-container-open":""}`}>
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
    </div>
  );
};
export default Home;
