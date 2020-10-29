import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from "@reduxjs/toolkit";

import { getAllData } from "../../services/api/calls";

import { ALL_STATES } from "../../services/api/routes";

const statesAdapter = createEntityAdapter({
  status: "idle"
});

export const fetchStates = createAsyncThunk("states/fetchStates", async () => {
  const response = await getAllData(ALL_STATES);
  response.sort((a, b) => {
    return a["stateName"] < b["stateName"] ? -1 : 1;
  });
  const newResponse = response.map((state) => {
    return {
      id: state["_id"],
      name: state["stateName"]
    };
  });
  return newResponse;
});

const statesSlice = createSlice({
  name: "states",
  initialState: statesAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchStates.fulfilled]: statesAdapter.setAll
  }
});

export const {
  selectAll: selectAllStates,
  selectById: selectStateById
} = statesAdapter.getSelectors((state) => state.states);

export default statesSlice.reducer;
