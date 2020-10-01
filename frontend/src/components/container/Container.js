import React, { useState, useEffect } from "react";
import "./Container.scss";
import { Select } from "../Select/Select";
import { CardContainer } from "../CardContainer/CardContainer";

const base_uri = "http://localhost:3001";
const seasons_path = "/seasons";
const states_path = "/states";

export const Container = () => {
  // let [data, setData] = useState([]);
  let [states, setStates] = useState([]);
  let [seasons, setSeasons] = useState([]);
  let [state, setState] = useState("");
  let [season, setSeason] = useState("");
  let [produce, setProduce] = useState([]);

  useEffect(() => {
    const seasons_uri = base_uri + seasons_path;
    const states_uri = base_uri + states_path;
    getStates(states_uri);
    getSeasons(seasons_uri);
  }, []);

  const getStates = (uri) => {
    fetch(uri)
      .then((res) => res.json())
      .then((resData) => {
        setStates(resData.map((obj) => obj.stateName));
        setState(resData[0].stateName);
      })
      .catch((e) => console.log(e));
  };
  const getSeasons = (uri) => {
    fetch(uri)
      .then((res) => res.json())
      .then((resData) => {
        setSeasons(resData.map((obj) => obj.seasonName));
        setSeason(resData[0].seasonName);
      })
      .catch((error) => console.log(error));
  };

  const getProduce = (state, season) => {
    const produce_uri = `${base_uri}/${state}/${season}`;
    fetch(produce_uri)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setProduce(resData.fruits);
      });
  };
  // const changeProduce = (state, season) => {
  //   setProduce(data[state][season]);
  // };

  const changeState = (event) => {
    let newState = event.target.value;
    setState(newState);
    getProduce(newState, season);
  };

  const changeSeason = (event) => {
    let newSeason = event.target.value;
    setSeason(newSeason);
    getProduce(state, newSeason);
  };

  return (
    <div id="container-div">
      {/* <div id="select-container-div"> */}
      <Select
        obj={{
          id: "state",
          name: "state",
          changeVal: changeState,
          arr: states,
        }}
      />
      <Select
        obj={{
          id: "season",
          name: "season",
          changeVal: changeSeason,
          arr: seasons,
        }}
      />
      <CardContainer arr={produce} />
      {/* </div> */}
    </div>
  );
};
