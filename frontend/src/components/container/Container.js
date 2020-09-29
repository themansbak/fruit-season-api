import React, { useState, useEffect } from "react";
import "./Container.scss";
import { Card } from "../card/Card";

export const Container = () => {
  let [data, setData] = useState([]);
  let [states, setStates] = useState([]);
  let [seasons, setSeasons] = useState([]);
  let [state, setState] = useState("");
  let [season, setSeason] = useState("");
  let [produce, setProduce] = useState([]);

  useEffect(() => {
    fetch("./fruits.json")
      .then((res) => res.json())
      .then((resData) => {
        let states = Object.keys(resData);
        let produceBySeasons = Object.values(resData);
        let seasons = Object.keys(produceBySeasons[0]);
        let defaultState = states[0];
        let defaultSeason = seasons[0];
        let produce = resData[defaultState][defaultSeason];
        // console.log(produce);
        setData(resData);
        setStates(states);
        setSeasons(seasons);
        setState(defaultState);
        setSeason(defaultSeason);
        setProduce(produce);
      });
  }, []);

  const changeProduce = (state, season) => {
    setProduce(data[state][season]);
  };

  const changeState = (event) => {
    let newState = event.target.value;
    setState(newState);
    changeProduce(newState, season);
  };

  const changeSeason = (event) => {
    let newSeason = event.target.value;
    setSeason(newSeason);
    changeProduce(state, newSeason);
  };

  return (
    <div id="container-div">
      <div id="select-container-div">
        <div id="select-state-div" className="select-div">
          <label htmlFor="states" id="states-label" className="select-label">
            Select a state
          </label>

          <select
            name="states"
            id="states"
            onChange={changeState}
            className="custom-select"
          >
            {states.map((state, idx) => (
              <option value={state} key={idx}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div id="select-season-div" className="select-div">
          <label htmlFor="seasons" id="seasons-label" className="select-label">
            Select a season
          </label>
          <select
            name="seasons"
            id="seasons"
            onChange={changeSeason}
            className="custom-select no-scroll"
          >
            {seasons.map((season, idx) => (
              <option value={season} key={idx}>
                {season}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <h2> {state} </h2>
      <h3> {season} </h3> */}
      <div id="cards-div">
        <ul>
          {produce.map((prod, idx) => {
            return (
              <li key={idx}>
                <Card produce={prod} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
