import react from "react";
import "./styles/Header.css";
import img from "../assets/new.png";
// import img from "../assets/logo_nice-transformed.png";
const Header = () => {
  return (
    <div className="MainHeader">
      <div id="LogoHolder">
        <img src={img} alt="logo" max-height="50px" width="125px" />
      </div>
      <div id="MenuOptions">
        <div>Home</div>
        <div>Amenities</div>
        <div>Rates</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Header;
