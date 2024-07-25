import Footer from "../components/footer";
import "../style/contactus.css";

const ContactUs = () => {
  return (
    <div>
      <section className="contact-container">
        <div className="contact-layout-container">
          <div className="contact-catalouge-container">
            <div className="contact-catalouge">
              <h4>Alpha Electronic</h4>
              <h2>Showroom</h2>
              <div className="catalouge-address">
                <p>
                  No.186/188, Pansodan Middle Block, Kyautada Township, Yangon,
                  Myanmar
                </p>
              </div>
              <div className="catalouge-phone">
                <p>01 382 772 | 09 407 146 226 | 09 424 461 693</p>
              </div>
            </div>
          </div>
          <div className="contact-catalouge-container">
            <div className="contact-catalouge">
              <h4>Alpha Electronic</h4>
              <h2>Showroom</h2>
              <div className="catalouge-address">
                <p>
                  No.186/188, Pansodan Middle Block, Kyautada Township, Yangon,
                  Myanmar
                </p>
              </div>
              <div className="catalouge-phone">
                <p>01 382 772 | 09 407 146 226 | 09 424 461 693</p>
              </div>
            </div>
          </div>
          <div className="contact-catalouge-container">
            <div className="contact-catalouge">
              <h4>Alpha Electronic</h4>
              <h2>Showroom</h2>
              <div className="catalouge-address">
                <p>
                  No.186/188, Pansodan Middle Block, Kyautada Township, Yangon,
                  Myanmar
                </p>
              </div>
              <div className="catalouge-phone">
                <p>01 382 772 | 09 407 146 226 | 09 424 461 693</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-container">
        <div className="contact-location-container">
          <div className="contact-location-layout">
            <div className="contact-loaction-container">
              <div className="contact-location">
                <h4>Alpha International</h4>
                <h2>Head Office</h2>
                <div className="map-container"></div>
                <div className="contact-description-detail">
                  <div className="description-detail-container">
                    <div className="contact-icon"></div>
                    <p>
                      No.186/188, Pansodan Middle Block, Kyautada Township,
                      Yangon, Myanmar
                    </p>
                  </div>
                  <div className="description-detail-container">
                    <div className="contact-icon"></div>
                    <p>01 382 772 | 09 407 146 226 | 09 424 461 693</p>
                  </div>
                  <div className="description-detail-container">
                    <div className="contact-icon"></div>
                    <a href="/">info@alphaelectronicmm.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-from-container">
              <div className="contact-form-container-layout">
                <h3>Get In TOuch</h3>
                <p>
                  Please drop a message if you have any questions. We’ll get
                  back to you soon.
                </p>
                <div className="contact-form">
                  <form action="">
                    <div className="input-container">
                      <label htmlFor="">Name</label>
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="input-container">
                      <label htmlFor="">Phone Number</label>
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="">Message</label>
                      <textarea
                        onResize={false}
                        type="text"
                        placeholder="Enter Message"
                      />
                    </div>
                    <div className="form-button">
                      <button>Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default ContactUs;
