import React, { useState } from "react";
import "./SelectContainer.scss";
import { SeasonsList } from "../../../../features/seasons/SeasonsList";
import { StatesList } from "../../../../features/states/StatesList";
import { fetchProduce } from "../../../../features/produce/produceSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectStateById } from "../../../../features/states/statesSlice";
import { selectSeasonById } from "../../../../features/seasons/seasonsSlice";

export const SelectContainer = React.memo((props) => {
  let [seasonId, setSeasonId] = useState("");
  let [stateId, setStateId] = useState("");
  const seasonsChanged = (e) => setSeasonId(e.target.value);
  const statesChanged = (e) => setStateId(e.target.value);
  const dispatch = useDispatch();

  let state = useSelector((s) => selectStateById(s, stateId));
  let season = useSelector((s) => selectSeasonById(s, seasonId));

  if (state && season) {
    dispatch(fetchProduce({ state: state.name, season: season.name }));
  }

  return (
    <div id="select-div">
      <StatesList valueChanged={statesChanged} />
      <SeasonsList valueChanged={seasonsChanged} />
    </div>
  );
});
