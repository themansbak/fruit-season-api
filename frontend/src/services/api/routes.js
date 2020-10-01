import { getData, getRes } from "./calls";
const base_uri = "http://localhost:3001";
const seasons_path = "/seasons";
const states_path = "/states";

export const getSeasons = (setSeasons, setSeason) => {
  getData(base_uri + seasons_path, "seasonName", setSeasons, setSeason);
};

export const getStates = (setStates, setState) => {
  getData(base_uri + states_path, "stateName", setStates, setState);
};

export const getProduce = (setProduce, state, season) => {
  getRes(`${base_uri}/${state}/${season}`, "fruits", setProduce);
};
