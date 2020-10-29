import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "../src/features/states/statesSlice";
import seasonsReducer from "../src/features/seasons/seasonsSlice";
import produceReducer from "../src/features/produce/produceSlice";

export default configureStore({
  reducer: {
    states: statesReducer,
    seasons: seasonsReducer,
    produce: produceReducer
  }
});
