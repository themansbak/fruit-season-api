import React from "react";
import "./Select.scss";

export const Select = React.memo((props) => {
  return (
    <div className="select-div">
      {/* <label
        htmlFor={props.list.id}
        id={`${props.list.id}-label`}
        className="select-label"
      >
        Select a {props.list.title}
      </label> */}

      <select
        name={`${props.list.id}s`}
        id={`${props.list.id}s`}
        className="custom-select"
        onChange={props.list.changeFunc}
      >
        <option value="">Select a {props.list.title}</option>
        {props.list.data.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
});
