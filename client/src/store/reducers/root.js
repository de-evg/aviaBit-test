import { combineReducers } from "redux";
import { flightsData } from "./flights/flights";

export const NameSpace = {
  FLIGHTS: `FLIGHTS`,
};

export default combineReducers({
  [NameSpace.FLIGHTS]: flightsData,
});
