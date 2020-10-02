import React, { useEffect, useState } from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  let name = props.obj;
  // let picture = props.obj.picture ? props.obj.picture : "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg";
  let [description, setDescription] = useState(props.obj.description);
  let [image, setImage] = useState(
    "https://i.pinimg.com/originals/32/e2/41/32e2413585f1d2e0333c7dee3c4808bf.jpg"
  );
  useEffect(() => {
    // console.log(name);
    // console.log(process.env.REACT_APP_PIXA_API_KEY);
    const url = `https://pixabay.com/api/?key=${
      process.env.REACT_APP_PIXA_API_KEY
    }&q=${name}&safesearch=${true}`;

    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImage(data["hits"][0]["largeImageURL"]);
      })
      .catch((e) => console.log(e));

    const proxy = "http://localhost:3002";
    const searchUrl = `${proxy}/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${name}`;

    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log(data["query"]["search"][0]["title"]);
        const title = data["query"]["search"][0]["title"];
        // console.log(title);
        const extractUrl = `${proxy}/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${title}&formatversion=2&exsentences=10&exlimit=1&explaintext=1`;
        fetch(extractUrl)
          .then((res) => res.json())
          .then((data) => {
            let d = data["query"]["pages"][0]["extract"].split("\n")[0];
            console.log(d);
            setDescription(d);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, [name]);
  let reg = /<span class="[a-zA-Z]+">/g;
  let reg2 = /<\/span>/g;
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
          ? description.charAt(0).toUpperCase() +
            description.replace(reg, "").replace(reg2, "").slice(1) +
            "."
          : "This is a default description. More information to come for this particular card. Thank you for your patience."}
      </p>
    </li>
  );
};
