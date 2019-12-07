import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container Footer">
      <hr />
      <div className="LogoContainer">
        <Link to={appRoutes.home}>
        </Link>
      </div>
      <br />

      {/* attribution of sources */}
      <div className="SourceContainer">
        Information adapted from{" "}
        <a
          href="https://en.wikipedia.org/wiki/Dyatlov_Pass_incident"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://en.wikipedia.org/wiki/Dyatlov_Pass_incident
        </a>
      </div>
      <div className="SourceContainer">
        Information adapted from{" "}
        <a
          href="https://dyatlovpass.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://dyatlovpass.com/
        </a>
      </div>
    </div>
  );
};

export default Footer;
