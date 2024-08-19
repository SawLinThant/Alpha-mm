import { useMutation } from "@apollo/client";
import Footer from "../components/footer";
import Header from "../components/Header";
import LocationIcon from "../modules/icons/location";
import MailIcon from "../modules/icons/mail-icon";
import PhoneIcon from "../modules/icons/phone-iocn";
import PlaneIcon from "../modules/icons/plane-icon";
import RightArrrow from "../modules/icons/rightarrow";
import "../style/contactus.css";
import { CREATE_MESSAGE } from "../graphql/mutation/productMutations";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "../modules/icons/loading-button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createMessage, { loading }] = useMutation(CREATE_MESSAGE);
  const{pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])

  const handleSubmitMessage = handleSubmit(async (credentials) => {
    try {
      await createMessage({
        variables: {
          username: credentials.username,
          ph_number: credentials.ph_number,
          message: credentials.message,
        },
      });
      toast.success("Your message has been sent");
      reset();
    } catch (err) {
      throw new Error("Error creating message");
    }
  });
  return (
    <div style={{backgroundColor:'#B1B3B6'}}>
      <Toaster />
      <Header />
      <section className="contact-form-container">
        <div className="contact-location-container-layout">
          <div className="contact-location-layout">
            <div className="contact-loaction-container">
              <div className="contact-location">
                <p>Alpha International</p>
                <h2>Head Office</h2>
                <div className="map-container"></div>
                <div className="contact-description-detail">
                  <div className="description-detail-container">
                    <div className="contact-icon">
                      <LocationIcon width={24} height={24} />
                    </div>
                    <p>
                      No.186/188, Pansodan Middle Block, Kyautada Township,
                      Yangon, Myanmar
                    </p>
                  </div>
                  <a href="mailto:info@alphaelectronicmm.com" className="description-detail-container">
                    <div className="contact-icon">
                      <MailIcon width={24} height={24} />
                    </div>
                    <p>
                      {" "}
                      <a>info@alphaelectronicmm.com</a>
                    </p>
                  </a>
                  <a href="tel:01 382 772" className="description-detail-container">
                    <div className="contact-icon">
                      <PhoneIcon width={24} height={24} />
                    </div>
                    <p>01 382 772 </p>
                  </a>
                  <a href="tel:09 407 146 226" className="description-detail-container">
                    <div className="contact-icon">
                      <PhoneIcon width={24} height={24} />
                    </div>
                    <p>09 407 146 226 </p>
                  </a>
                  <a href="tel:09 424 461 693" className="description-detail-container">
                    <div className="contact-icon">
                      <PhoneIcon width={24} height={24} />
                    </div>
                    <p> 09 424 461 693</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-from-container">
              <div className="contact-form-container-layout">
                <h2>Get In Touch</h2>
                <p>
                  Please drop a message if you have any questions. We’ll get
                  back to you soon.
                </p>
                <div className="contact-form">
                  <form action="" onSubmit={handleSubmitMessage}>
                    <div className="input-container">
                      <div className="input-icon-container">
                        <PlaneIcon width={24} height={24} />
                        <label htmlFor="">Name</label>
                      </div>
                      
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter Your Name"
                        {...register("username", {
                          required: "username is required",
                        })}
                      />
                    </div>
                    <div className="input-container">
                      <div className="input-icon-container">
                        <PhoneIcon width={24} height={24} />
                        <label htmlFor="">Phone Number</label>
                      </div>
                     
                      <input
                        name="ph_number"
                        type="text"
                        placeholder="Enter Your Phone Number"
                        {...register("ph_number", {
                          required: "ph_number is required",
                        })}
                      />
                    </div>
                    <div className="text-area-container">
                      <div className="input-icon-container">
                        <MailIcon width={24} height={24} />
                        <label htmlFor="">Message</label>
                      </div>
                     
                      <textarea
                        name="message"
                        onResize={false}
                        type="text"
                        placeholder="Enter Message"
                        {...register("message", {
                          required: "message is required",
                        })}
                      />
                    </div>
                    <div className="form-button">
                      <button type="submit">
                        {loading ? (
                          <LoadingButton />
                        ) : (
                          <div className="message-subit-icon">
                            <p>Send Message</p> <RightArrrow width={24} height={24} />
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ContactUs;
