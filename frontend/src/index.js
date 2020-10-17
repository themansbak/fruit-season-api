import React from "react";
import ReactDOM from "react-dom";

import App from "./scenes/Home/components/App";

import store from "./store";
import { Provider } from "react-redux";
import { fetchStates } from "./features/states/statesSlice";
import { fetchSeasons } from "./features/seasons/seasonsSlice";

store.dispatch(fetchStates());
store.dispatch(fetchSeasons());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
