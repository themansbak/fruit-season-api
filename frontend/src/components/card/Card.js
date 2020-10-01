import React, { useEffect, useState } from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  let name = props.obj;
  let picture = props.obj.picture
    ? props.obj.picture
    : "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg";
  let description = props.obj.description;
  let [image, setImage] = useState(
    "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg"
  );
  useEffect(() => {
    // console.log(name);
    console.log(process.env.REACT_APP_PIXA_API_KEY);
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXA_API_KEY}&q=${name}`;

    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImage(data["hits"][0]["largeImageURL"]);
      })
      .catch((e) => console.log(e));
  }, [name]);
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
};
