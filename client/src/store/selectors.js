import { createSelector } from "reselect";
import { NameSpace } from "./reducers/root";
import {
  filterByActual,
  filterByPlanned,
  getGroupedData,
  getAllData,
  groupByYears,
} from "../helpers/statistic";

export const getChartData = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (state) => state[NameSpace.STATISTIC].statisticType,
  (state) => state[NameSpace.STATISTIC].filter,
  (flights, statisticType, filter) => {
    const filteredActualFlights = filterByActual(flights);
    const filteredPlannedFlights = filterByPlanned(flights);
    const actualChartData = getGroupedData(
      filteredActualFlights,
      statisticType,
      filter
    );
    const plannedChartData = getGroupedData(
      filteredPlannedFlights,
      statisticType,
      filter
    );
    const allData = getAllData(actualChartData, plannedChartData) || [];
    return allData;
  }
);

export const getYears = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (flights) => {
    const flightsByYears = groupByYears(flights, "YEAR");
    const years = Object.keys(flightsByYears);
    return years;
  }
);
