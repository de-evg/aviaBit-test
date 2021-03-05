import { createSelector } from "reselect";
import { StatisticType } from "../const";
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
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
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
  const Month = months.reduce((result, month) => {
    result[month] = [];
    return result;
  }, {});

  return years.reduce((result, year) => {
    const groupedByMonth = flightsByYears[year].reduce((MonthMap, flight) => {
      const monthName = months[Interval[filter](flight.dateFlight)];
      MonthMap[monthName].push(flight);

      return MonthMap;
    }, Month);

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

const convertToChartData = (flights, statisticType) => {
  const years = Object.keys(flights);
  switch (statisticType) {
    case StatisticType.YEARS:
      return years.reduce((statisticByYears, year) => {
        const yearStatistic = flights[year].reduce(
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

    case StatisticType.MONTHS:
      return years.map((year) => {
        return months.reduce((result, month) => {
          if (!flights[year][month]) {
            result.push({ name: `${year} ${month}` });
          } else {
            flights[year][month].forEach((flight) => {
              flight.name = `${year} ${month}`;
              result.push(flight);
            });
          }
          return result;
        }, []);
      });

    default:
      return [];
  }
};

const getGroupedData = (flights, statisticType) => {
  const flightsByYears = groupByYears(flights, "YEAR");
  const result =
    statisticType === StatisticType.YEARS
      ? flightsByYears
      : groupByMonths(flightsByYears, "MONTH");
  const convertedFlights = convertToChartData(result, statisticType);
  return convertedFlights;
};

const convertSecToHours = (sec) => Math.floor(sec / 3600);

const getAllData = (actualChartData, plannedChartData) => {
  if (
    Object.keys(actualChartData).length &&
    Object.keys(plannedChartData).length
  ) {
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
      const plannedFlight = plannedChartData.filter(
        (data) => data.name === year
      );
      if (actualFlight.length) {
        statisctic.actualTimeFlight = convertSecToHours(
          actualFlight[0].timeFlight
        );
        statisctic.actualTimeWork = convertSecToHours(actualFlight[0].timeWork);
      }
      if (plannedFlight.length) {
        statisctic.plannedTimeFlight = convertSecToHours(
          plannedFlight[0].timeFlight
        );
        statisctic.plannedTimeWork = convertSecToHours(
          plannedFlight[0].timeWork
        );
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
  (state) => state[NameSpace.STATISTIC].statisticType,
  (flights, statisticType) => {
    const filteredActualFlights = filterByActual(flights);
    const filteredPlannedFlights = filterByPlanned(flights);
    const actualChartData = getGroupedData(
      filteredActualFlights,
      statisticType
    );
    const plannedChartData = getGroupedData(
      filteredPlannedFlights,
      statisticType
    );
    console.log(actualChartData);
    debugger;
    const allData = getAllData(actualChartData, plannedChartData) || [];
    console.log(allData);
    return allData;
  }
);
