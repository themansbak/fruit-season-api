import React, { useEffect, useState } from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export const Card = React.memo((props) => {
  let name = props.obj;
  let [description, setDescription] = useState(props.obj.description);
  let [image, setImage] = useState(
    "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg"
  );

  return (
    <li id="card-div">
      <h4 id="card-title">
        <FontAwesomeIcon icon={faSeedling} className="card-icon" /> {name}
      </h4>
      <div id="img-wrapper">
        <img src={image} alt="Img" id="card-img" />{" "}
      </div>
      <p id="card-description">
        {description
          ? description
          : "This is a default description. More information to come for this particular card. Thank you for your patience."}
      </p>
    </li>
  );
});
