import Footer from "../components/footer";
import Header from "../components/Header";
import RightArrrow from "../modules/icons/rightarrow";
import "../style/aboutus.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const AboutUs = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="aboutus-container" style={{ backgroundColor: "#B1B3B6" }}>
      <Header />
      <section className="about-alpha">
        <div className="about-alpha-layout">
          <div className="about-alpha-logo-container">
            {/* <div className="about-alpha-logo">
              <h4>About Us</h4>
              <h1>Alpha International</h1>
            </div> */}
          </div>
          <div className="about-alpha-text-container">
            <div className="about-alpha-text">
              <h2
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                About Alpha Electronics{" "}
                <div
                  className="line-div"
                  style={{ border: "1px solid black" }}
                ></div>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  gap: "8px",
                }}
              >
                <div style={{ marginTop: "3px" }}>
                  <FaCaretRight />
                </div>
                Alpha Electronics is a leading local brand, making everyone's
                home more smarter and modern by providing the consumer
                electronics with unique design and high quality in an affordable
                way.
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="about-us-description-headeing-layout"
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   alignItems: "start",
                  //   gap: "8px",
                  // }}
                >
                  <div className="adjust-margin"><FaCaretRight /></div> Our brands stands on these three important
                  tenants
                </div>

                <div
                  className="about-us-description-list-layout"
                  style={{ listStyle: "none", marginLeft: "1.5rem" }}
                >
                  <span style={{ color: "black", width: "1rem" }}>1.</span>
                  <div>Modern and unique designs</div>
                </div>
                <div
                  className="about-us-description-list-layout"
                  style={{ listStyle: "none", marginLeft: "1.5rem" }}
                >
                  <span style={{ color: "black", width: "1rem" }}>2.</span>{" "}
                  <div>
                    Differentiation from other brands, whether in terms of
                    technology and innovation or the design.
                  </div>
                </div>
                <div
                  className="about-us-description-list-layout"
                  style={{ listStyle: "none", marginLeft: "1.5rem" }}
                >
                  <span style={{ color: "black", width: "1rem" }}>3.</span>{" "}
                  <div>
                    Value for money, to suit the needs of the people of Myanmar.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            {/* <div className="mvp-button">
              <a href="/">
                <p>Read More</p><RightArrrow width={24} height={24}/>
              </a>
            </div> */}
          </div>
          <div className="mvp-image-container">
            <div className="mvp-image">
              <img src="images/mvp.jpg" alt="mvp1" />
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
      <section className="vision-container">
        <div className="vision-container-layout">
          <div className="reason-container">
            <div className="reason">
              <div className="reason-description-container">
                <h4>Why Choose Us?</h4>
                <div className="reason-text">
                  <p>
                    Being an older electronic company in Myanmar, we understand
                    the needs of local consumers well and have been satisfying
                    those with our innovations and latest technology.
                  </p>
                  <p>
                    We are distributing world-class, dependable, high-quality
                    electronic products at affordable prices and have been
                    striving to grow together with our valuable employees,
                    business partners and retailers as our company’s slogan
                    “Moving Forward Together”{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aim-container">
            <div className="sub-aim-container">
              <div className="aim">
                <div className="aim-layout">
                  <h4>Our Vision</h4>
                  <p>
                    To be a globally recognised corporation for excellence,
                    governance, consumer delight and fairness to each
                    stakeholder including the society and environment we operate
                    in
                  </p>
                </div>
              </div>
              <div className="aim">
                <div className="aim-layout">
                  <h4>Our Mission</h4>
                  <p>
                    To achieve our vision through business ethics, global reach,
                    technological expertise, building long-term relationships
                    with all our associates, customers, partners and employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blank-separator"></div>
      <Footer />
    </div>
  );
};

export default AboutUs;
