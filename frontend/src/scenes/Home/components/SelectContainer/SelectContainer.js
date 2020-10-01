import React from "react";
import "./SelectContainer.scss";
import { Select } from "../../../../components/Select/Select";

export const SelectContainer = (props) => {
  return (
    <div id="select-div">
      {props.states ? <Select obj={props.states} /> : ""}
      {props.seasons ? <Select obj={props.seasons} /> : ""}
    </div>
  );
};
