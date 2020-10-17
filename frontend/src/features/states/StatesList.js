import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStates, selectAllStates } from "./statesSlice";
import { Select } from "../../components/Select/Select";

export const StatesList = React.memo(({ valueChanged }) => {
  const allStates = useSelector(selectAllStates);

  let content = allStates.map((state) => {
    return (
      <option key={state.id} value={state.name}>
        {" "}
        {state.name}
      </option>
    );
  });

  return (
    <section>
      <Select
        list={{
          id: "states",
          title: "state",
          data: allStates,
          changeFunc: valueChanged
        }}
      />
    </section>
  );
});
