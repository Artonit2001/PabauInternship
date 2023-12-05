import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Header/Header.css";

const Header = ({ pageNumber }) => {
  return (
    <header className="header">
      <div>
        <p>Choose Service</p>
        <h3 className="pageNumber">Step{pageNumber}/2</h3>
      </div>
    </header>
  );
};

export default Header;
