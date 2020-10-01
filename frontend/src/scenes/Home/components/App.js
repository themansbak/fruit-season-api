import React, { useEffect, useState } from "react";
import "./App.scss";

import { Header } from "../../../components/Header/Header";
import { SelectContainer } from "./SelectContainer/SelectContainer";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { Footer } from "../../../components/Footer/Footer";
import {
  getSeasons,
  getStates,
  getProduce,
} from "../../../services/api/routes";

export default function App() {
  let [seasons, setSeasons] = useState([]);
  let [states, setStates] = useState([]);
  let [season, setSeason] = useState("");
  let [state, setState] = useState("");
  let [produce, setProduce] = useState([]);

  const changeSeason = (event) => {
    console.log(event.target.value);
    setSeason(event.target.value);
    changeProduce(state, event.target.value);
  };

  const changeState = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
    changeProduce(event.target.value, season);
  };

  const changeProduce = (state, season) => {
    getProduce(setProduce, state, season);
  };

  useEffect(() => {
    getSeasons(setSeasons, setSeason);
    getStates(setStates, setState);
    getProduce(setProduce, "Alaska", "Early January");
  }, []);

  return (
    <div className="App">
      <Header />
      <SelectContainer
        seasons={{
          name: "season",
          id: "season",
          changeVal: changeSeason,
          arr: seasons,
        }}
        states={{
          name: "state",
          id: "state",
          changeVal: changeState,
          arr: states,
        }}
      />
      <CardContainer arr={produce} />
      <Footer />
    </div>
  );
}
