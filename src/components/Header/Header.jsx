import React from "react";
import artAndToby from "../../assets/artAndToby.gif";
import NavBar from "../NavBar";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={artAndToby} alt="Toby and Art Logo" className="logo" />
      <NavBar />
    </div>
  );
};

export default Header;
