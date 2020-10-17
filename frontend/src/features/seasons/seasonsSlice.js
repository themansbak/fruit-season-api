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
    const response = await getAllData(ALL_SEASONS);
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
