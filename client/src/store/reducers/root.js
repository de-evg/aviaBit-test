import { combineReducers } from "redux";
import { flightsData } from "./flights/flights";
import { statisticData } from "./statistic/statistic";

export const NameSpace = {
  FLIGHTS: `FLIGHTS`,
  STATISTIC: `STATISTIC`,
};

export default combineReducers({
  [NameSpace.FLIGHTS]: flightsData,
  [NameSpace.STATISTIC]: statisticData,
});
