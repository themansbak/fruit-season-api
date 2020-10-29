import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { getAllData } from "../../services/api/calls";
import { ALL_SEASONS } from "../../services/api/routes";

const seasonsAdapter = createEntityAdapter();

export const fetchSeasons = createAsyncThunk(
  "seasons/fetchSeasons",
  async () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const time = ["Early", "Late"];
    const response = await getAllData(ALL_SEASONS);
    response.sort((a, b) => {
      const [aA, aB] = a["seasonName"].split(" ");
      const [bA, bB] = b["seasonName"].split(" ");
      return (
        months.indexOf(aB) - months.indexOf(bB) ||
        time.indexOf(aA) - time.indexOf(bA)
      );
    });
    const newResponse = response.map((season) => {
      return {
        id: season["_id"],
        name: season["seasonName"]
      };
    });
    return newResponse;
  }
);

const seasonsSlice = createSlice({
  name: "seasons",
  initialState: seasonsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchSeasons.fulfilled]: seasonsAdapter.setAll
  }
});

export default seasonsSlice.reducer;

export const {
  selectAll: selectAllSeasons,
  selectById: selectSeasonById
} = seasonsAdapter.getSelectors((state) => state.seasons);

export const selectFirstSeason = (state) => state.seasons.ids[0];
