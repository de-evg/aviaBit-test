import { createSelector } from "reselect";
import { NameSpace } from "./reducers/root";
import {
  filterByActual,
  filterByPlanned,
  getGroupedData,
  getAllData,
  findYears,
  convertToChartData,
} from "../helpers/statistic";

export const getChartData = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (state) => state[NameSpace.STATISTIC].statisticType,
  (state) => state[NameSpace.STATISTIC].filter,
  (flights, statisticType, filter) => {
    const filteredActualFlights = filterByActual(flights);
    const filteredPlannedFlights = filterByPlanned(flights);
    const actualFlights = getGroupedData(
      filteredActualFlights,
      statisticType,
      filter
    );
    const plannedFlights = getGroupedData(
      filteredPlannedFlights,
      statisticType,
      filter
    );

    const actualChartData = convertToChartData(actualFlights, statisticType, filter);
    const plannedChartData = convertToChartData(plannedFlights, statisticType, filter);

    const allData = getAllData(actualChartData, plannedChartData) || [];
    return allData;
  }
);

export const getYears = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (flights) => {
    return findYears(flights);
  }
);

export const getFlightsForInterval = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (state) => state[NameSpace.STATISTIC].statisticType,
  (state) => state[NameSpace.STATISTIC].filter,
  (flights, statisticType, filter) => {
    return getGroupedData(flights, statisticType, filter);
  }
);
