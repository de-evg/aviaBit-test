import {createSelector} from "reselect";
import {NameSpace} from "./reducers/root";
import {
  findYears,
  generateChartData,
} from "../helpers/statistic";

export const getChartData = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (state) => state[NameSpace.STATISTIC].statisticType,
  (state) => state[NameSpace.STATISTIC].filter,
  (flights, statisticType, filter) => {
    return generateChartData(flights, statisticType, filter);
  }
);

export const getYears = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (flights) => {
    return findYears(flights);
  }
);
