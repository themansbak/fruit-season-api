import React, { useEffect, useState } from "react";
import "./App.scss";

import { Header } from "../../../components/Header/Header";
import { SelectContainer } from "./SelectContainer/SelectContainer";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { Footer } from "../../../components/Footer/Footer";
import {
  getSeasons,
  getStates,
  getProduce
} from "../../../services/api/routes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div id="app-body">
        <SelectContainer />
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
}
