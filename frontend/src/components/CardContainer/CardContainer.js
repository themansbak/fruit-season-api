import React from "react";
import "./CardContainer.scss";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
import { selectAllProduce } from "../../features/produce/produceSlice";

export const CardContainer = React.memo(() => {
  const produceList = useSelector(selectAllProduce);
  return (
    <ul>
      {produceList.map((produce) => {
        return <Card obj={produce.name} key={produce.id} />;
      })}
    </ul>
  );
});
