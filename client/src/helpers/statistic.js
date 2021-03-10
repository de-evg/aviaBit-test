import { StatisticType, months } from "../const";

const Interval = {
  MONTH: (date) => date.getMonth(),
  YEAR: (date) => date.getFullYear(),
};

export const groupByYears = (flights, statisticType) => {
  return flights.reduce((result, flight) => {
    const year = Interval[statisticType](flight.dateFlight);
    result[year] = result[year] || [];
    result[year].push(flight);
    return result;
  }, {});
};

export const groupByMonths = (flightsByYears, statisticType, year) => {
  const Month = months.reduce((result, month) => {
    result[month] = [];
    return result;
  }, {});

  return flightsByYears[year].reduce((MonthMap, flight) => {
    const monthName = months[Interval[statisticType](flight.dateFlight)];
    MonthMap[monthName].push(flight);

    return MonthMap;
  }, Month);
};

export const filterByActual = (flights) => {
  return flights.filter((flight) => !flight.type);
};

export const filterByPlanned = (flights) => {
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
      return months.reduce((statisticByMonths, month) => {
        const monthStatistic = flights[month].reduce(
          (time, flight) => {
            time.timeFlight += flight.timeFlight || 0;
            time.timeWork += flight.timeWork || 0;
            return time;
          },
          { timeFlight: 0, timeWork: 0, name: month }
        );
        statisticByMonths.push(monthStatistic);
        return statisticByMonths;
      }, []);

    default:
      return flights;
  }
};

export const getGroupedData = (flights, statisticType, filter) => {
  const flightsByYears = groupByYears(flights, "YEAR");
  const result =
    statisticType === StatisticType.YEARS
      ? flightsByYears
      : groupByMonths(flightsByYears, "MONTH", filter);
  const convertedFlights = convertToChartData(result, statisticType);
  return convertedFlights;
};

const convertSecToHours = (sec) => Math.floor(sec / 3600);

export const getAllData = (actualChartData, plannedChartData) => {
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
