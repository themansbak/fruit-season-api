import { getData, getRes } from "./calls";
export const BASE_URI = `${window.location.protocol}//${window.location.hostname}:3001`;
export const ALL_STATES = `${BASE_URI}/states`;
export const ALL_SEASONS = `${BASE_URI}/seasons`;
const seasons_path = "/seasons";
const states_path = "/states";

// const proxy = "http://localhost:3002";
// const searchUrl = `${proxy}/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${name}`;
// const extractUrl = `${proxy}/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${title}&formatversion=2&exsentences=10&exlimit=1&explaintext=1`;

export const getSeasons = (setSeasons, setSeason) => {
  console.log('base uri: ' + BASE_URI);
  getData(BASE_URI + seasons_path, "seasonName", setSeasons, setSeason);
};

export const getStates = (setStates, setState) => {
  console.log('base uri: ' + BASE_URI);
  getData(BASE_URI + states_path, "stateName", setStates, setState);
};

export const getProduce = (setProduce, state, season) => {
  console.log('base uri: ' + BASE_URI);
  getRes(`${BASE_URI}/${state}/${season}`, "fruits", setProduce);
};
