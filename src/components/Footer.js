import react from "react";

import "./styles/Footer.css";
import img from "../assets/logo_nice-transformed.png";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="Sites">
        <h3>Booking Sites</h3>
        <ul>
          <li>Booking.com</li>
          <li>Airbnb.com</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className="Company">
        <h2>
          {" "}
          <img className="image" src={img} alt="logo" height="150px" />
        </h2>{" "}
        <ul>
          <li>Making you feel home since 2018</li>
          <li>All Rights Reserved.</li>
        </ul>
      </div>
      <div className="Contact">
        <h3>Contacts</h3>{" "}
        <ul>
          <li>Geronica Lasap</li>
          <li>+63 917 555 3846</li>
          <li>General Maxilom Avenue</li>
          <li>6000 Cebu City, Philippines</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
