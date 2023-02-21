import react from "react";
import "./styles/Header.css";
import img from "../assets/logo_nice-transformed-transformed2.png";
const Header = () => {
  return (
    <div className="MainHeader">
      <div className="LogoHolder">
        <img src={img} alt="logo" height="150px" />
      </div>
      <h2>Home</h2>
      <h2>Contact Us</h2>
    </div>
  );
};

export default Header;
