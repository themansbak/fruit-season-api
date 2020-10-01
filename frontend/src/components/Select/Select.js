import React from "react";
import "./Select.scss";

export const Select = (props) => {
  return (
    <div className="select-div">
      <label
        htmlFor={`${props.obj.name}s`}
        id={`${props.obj.name}s-label`}
        className="select-label"
      >
        Select a {props.obj.name}
      </label>

      <select
        name={`${props.obj.name}s`}
        id={`${props.obj.id}s`}
        onChange={props.obj.changeVal}
        className="custom-select"
      >
        {props.obj.arr.map((val, idx) => (
          <option value={val} key={idx}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};
