import Footer from "../components/footer";
import Header from "../components/Header";
import RightArrrow from "../modules/icons/rightarrow";
import "../style/aboutus.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Header />
      <section className="about-alpha">
        <div className="about-alpha-layout">
          <div className="about-alpha-logo-container">
            <div className="about-alpha-logo">
              <h4>About Us</h4>
              <h1>Alpha International</h1>
            </div>
          </div>
          <div className="about-alpha-text-container">
            <div className="about-alpha-text">
              <p>
                Alpha International Company Limited is a private company, which
                was founded since 2004 in Myanmar. We are an official
                distributor who imports and sells consumer electronics such as
                Alpha, Syinix and Era, Karofi water and air processing machines
                as well as FMCG products such as Turkish condensed milk, raw
                milk, the best condensed milk, and also Chocopie food products
                around the country. The initial name of our company was RICH
                HERO (RH Company Limited) and changed to Alpha International
                Company Limited in 2021.
              </p>
              <p>
                We understand the needs and wants of Myanmar people and have
                been providing world-class, dependable, high-quality electronic
                products at affordable prices. We have been striving to grow
                together with our valuable employees, business partners and
                retailers as our company’s slogan “Moving Forward Together”.
              </p>
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
            <div className="mvp-button">
              <a href="/">
                <p>Read More</p><RightArrrow width={24} height={24}/>
              </a>
            </div>
          </div>
          <div className="mvp-image-container">
          <div className="mvp-image">
              <img src="/mvpimg.png" alt="mvp1" />
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
