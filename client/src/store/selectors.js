import { createSelector } from "reselect";
import { NameSpace } from "./reducers/root";

const Interval = {
  MONTH: (date) => date.getMonth(),
  YEAR: (date) => date.getFullYear(),
};

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JAN",
  "JUL",
  "AUG",
  "SEP",
  "NOV",
  "DEC",
];

const groupByYears = (flights, filter) => {
  return flights.reduce((result, flight) => {
    const year = Interval[filter](flight.dateFlight);
    result[year] = result[year] || [];
    result[year].push(flight);
    return result;
  }, {});
};

const groupByMonths = (flightsByYears, filter) => {
  const years = Object.keys(flightsByYears);
  return years.reduce((result, year) => {
    const groupedByMonth = flightsByYears[year].reduce((result, flight) => {
      const month = months[Interval[filter](flight.dateFlight)];
      result[month] = result[month] || [];
      result[month].push(flight);
      return result;
    }, {});

    result[year] = groupedByMonth;
    return result;
  }, {});
};

const filterByActual = (flights) => {
  return flights.filter((flight) => !flight.type);
};

const filterByPlanned = (flights) => {
  return flights.filter((flight) => !!flight.type);
};

const convertToChartData = (flightsByYear) => {
  const years = Object.keys(flightsByYear);
  return years.reduce((statisticByYears, year) => {
    const yearStatistic = flightsByYear[year].reduce(
      (time, flight) => {
        time.timeFlight += flight.timeFlight || 0;
        time.timeWork += flight.timeWork || 0;
        return time;
      },
      { timeFlight: 0, timeWork: 0, name: year }
    );

    statisticByYears.push(yearStatistic);
    return statisticByYears;
  }, []);
};

const getActualChartData = (flights) => {
  const filteredFlights = filterByActual(flights);
  const flightsByYears = groupByYears(filteredFlights, "YEAR");
  const flightsByMonths = groupByMonths(flightsByYears, "MONTH");
  const convertedFlights = convertToChartData(flightsByYears);
  console.log(convertedFlights);
  return convertedFlights;
};

const getPlannedFlights = (flights) => {
  const filteredFlights = filterByPlanned(flights);
  const flightsByYears = groupByYears(filteredFlights, "YEAR");
  const flightsByMonths = groupByMonths(flightsByYears, "MONTH");
  const convertedFlights = convertToChartData(flightsByYears);
  console.log(convertedFlights);
  return convertedFlights;
};

const convertSecToHours = (sec) => Math.floor( sec / 3600);

const getAllData = (actualChartData, plannedChartData) => {
  if (Object.keys(actualChartData).length && Object.keys(plannedChartData).length) {
    const years = new Set();
    actualChartData.forEach((flight) => {
      years.add(flight.name);
    });
    plannedChartData.forEach((flight) => {
      years.add(flight.name);
    });

    const allData = [...years].reduce((result, year) => {
      const statisctic = {};
      const actualFlight = actualChartData.filter((data) => data.name === year);
      const plannedFlight = plannedChartData.filter((data) => data.name === year);
      if (actualFlight.length) {
        statisctic.actualTimeFlight = convertSecToHours(actualFlight[0].timeFlight);
        statisctic.actualTimeWork = convertSecToHours(actualFlight[0].timeWork);
      }
      if (plannedFlight.length) {
        statisctic.plannedTimeFlight = convertSecToHours(plannedFlight[0].timeFlight);
        statisctic.plannedTimeWork = convertSecToHours(plannedFlight[0].timeWork);
      }
      statisctic.name = year;
      result.push(statisctic);
      return result;
    }, []);
    return allData;
  }
};

export const getChartData = createSelector(
  (state) => state[NameSpace.FLIGHTS].flights,
  (flights) => {
    const actualChartData = getActualChartData(flights);
    const plannedChartData = getPlannedFlights(flights);

    const allData = getAllData(actualChartData, plannedChartData) || [];
    console.log(allData);
    return allData;
  }
);
