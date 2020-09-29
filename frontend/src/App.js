import React from "react";
import "./styles/App.scss";

import { Container } from "./components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <header id="header">
        <h1 className="bold">
          <FontAwesomeIcon className="icon" icon={faTree} size="xs" /> Seasonal
          Crops
        </h1>
      </header>
      <Container />
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
    </div>
  );
}
