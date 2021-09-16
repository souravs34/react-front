import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../components/Title";

function ContactMe() {
  return (
    <div>
      <div className="contact--title">
        <Tittle title={"About Me"} span={"About Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60823.76008460016!2d73.98324172709752!3d17.674534154106336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96bbd%3A0x5f4adf559fb4b19a!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629609363565!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"728724347"}
            text2={"928724347"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"sourav@gmail.com"}
            text2={"sourav1@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"plot no.76 Tripura colony "}
            text2={"Kohinoor nagar Satara"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
