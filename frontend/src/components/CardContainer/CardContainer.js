import React from "react";
import "./CardContainer.scss";
import { Card } from "../Card/Card";

export const CardContainer = (props) => {
  return (
    <ul>
      {props.arr.map((obj, idx) => {
        return <Card obj={obj} key={idx} />;
      })}
    </ul>
  );
};
