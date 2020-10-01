import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <p id="footer-text">
        <FontAwesomeIcon icon={faCopyright} id="footer-icon" size="sm" />{" "}
        <span className="bold">Seasonal Crops</span> by{" "}
        <a
          href="https://github.com/themansbak"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          Alex Man
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/markvong"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          Mark Vong
        </a>
        .
      </p>
    </footer>
  );
};
