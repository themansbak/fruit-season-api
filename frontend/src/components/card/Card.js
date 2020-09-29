import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  let name = props.produce;
  let picture = props.produce.picture;
  let description = props.produce.description;

  return (
    <div id="card-div">
      <h4 id="card-title">
        <FontAwesomeIcon icon={faSeedling} className="card-icon" /> {name}
      </h4>
      <img
        src={
          picture
            ? picture
            : "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg"
        }
        alt="Img"
        id="card-img"
      />
      <p id="card-description">
        {description
          ? description
          : "This is a default description. More information to come for this particular card. Thank you for your patience."}
      </p>
    </div>
  );
};
