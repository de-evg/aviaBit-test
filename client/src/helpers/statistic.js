import { StatisticType, months } from "../const";

const Interval = {
  MONTH: (date) => date.getMonth(),
  YEAR: (date) => date.getFullYear(),
};

export const findYears = (flights) => {
  const flightsByYears = groupByYears(flights, "YEAR");
  const years = Object.keys(flightsByYears);
  return years;
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

  if (!flightsByYears[year]) {
    return Month;
  }
  return flightsByYears[year].reduce((MonthMap, flight) => {
    const monthName = months[Interval[statisticType](flight.dateFlight)];
    MonthMap[monthName].push(flight);

    return MonthMap;
  }, Month);
};

export const filterByActual = (flights) =>
  flights.filter((flight) => !flight.type);
export const filterByPlanned = (flights) =>
  flights.filter((flight) => !!flight.type);

export const convertToChartData = (flights, statisticType, filter) => {
  const years = Object.keys(flights);
  switch (statisticType) {
    case StatisticType.YEARS:
      return years.reduce((statisticByYears, year) => {
        const yearStatistic = flights[year].reduce(
          (time, flight) => {
            time.timeFlight += flight.timeFlight || 0;
            time.timeWork += flight.timeWork || 0;
            time.timeBlock += flight.timeBlock || 0;
            time.timeNight += flight.timeNight || 0;
            time.timeBiologicalNight += flight.timeBiologicalNight || 0;
            return time;
          },
          {
            timeFlight: 0,
            timeWork: 0,
            timeBlock: 0,
            timeNight: 0,
            timeBiologicalNight: 0,
            name: year,
            interval: year,
          }
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
            time.timeBlock += flight.timeBlock || 0;
            time.timeNight += flight.timeNight || 0;
            time.timeBiologicalNight += flight.timeBiologicalNight || 0;
            return time;
          },
          {
            timeFlight: 0,
            timeWork: 0,
            timeBlock: 0,
            timeNight: 0,
            timeBiologicalNight: 0,
            name: month,
            interval: `${month} ${filter}`,
          }
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
  return result;
};

const convertSecToHours = (sec) => Math.floor(sec / 3600);

export const getAllData = (actualChartData, plannedChartData) => {
  const intervals = new Set();
  actualChartData.forEach((flight) => {
    intervals.add(flight.name);
  });
  plannedChartData.forEach((flight) => {
    intervals.add(flight.name);
  });

  const allData = [...intervals].reduce((result, interval) => {
    const statisctic = {};
    const actualFlight = actualChartData.filter(
      (data) => data.name === interval
    );
    const plannedFlight = plannedChartData.filter(
      (data) => data.name === interval
    );
    if (actualFlight.length) {
      statisctic.actualTimeFlight = convertSecToHours(
        actualFlight[0].timeFlight
      );
      statisctic.actualTimeWork = convertSecToHours(actualFlight[0].timeWork);
      statisctic.actualTimeBlock = convertSecToHours(actualFlight[0].timeBlock);
      statisctic.actualTimeNight = convertSecToHours(actualFlight[0].timeNight);
      statisctic.actualTimeBiologicalNight = convertSecToHours(
        actualFlight[0].timeBiologicalNight
      );
      statisctic.interval = actualFlight[0].interval;
    }
    if (plannedFlight.length) {
      statisctic.plannedTimeFlight = convertSecToHours(
        plannedFlight[0].timeFlight
      );
      statisctic.plannedTimeWork = convertSecToHours(plannedFlight[0].timeWork);
      statisctic.plannedTimeBlock = convertSecToHours(
        plannedFlight[0].timeBlock
      );
      statisctic.plannedTimeNight = convertSecToHours(
        plannedFlight[0].timeNight
      );
      statisctic.plannedTimeBiologicalNight = convertSecToHours(
        plannedFlight[0].timeBiologicalNight
      );
      statisctic.interval = plannedFlight[0].interval;
    }
    statisctic.name = interval;
    result.push(statisctic);
    return result;
  }, []);
  return allData;
};

export const generateChartData = (flights, statisticType, filter) => {
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
};
