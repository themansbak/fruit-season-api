import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header id="header">
      <h1 className="bold">
        <FontAwesomeIcon className="icon" icon={faTree} size="xs" /> Seasonal
        Crops
      </h1>
    </header>
  );
};
