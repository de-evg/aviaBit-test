import { sortByDate } from "./sort";
import { months } from "../const";
import { filterByPlanned, groupByYears, groupByMonths } from "./statistic";

const NEXT_YEAR = 12;

const findNextFlight = (flights) => {
  const currentDate = new Date();
  let [year, month] = [
    currentDate.getFullYear(),
    months[currentDate.getMonth()],
  ];
  const flightsByYears = groupByYears(flights, "YEAR");
  const flightsByMonths = groupByMonths(flightsByYears, "MONTH", year);
  let dayX = flightsByMonths[month]
    .filter((flight) => flight.dateFlight > currentDate)
    .sort(sortByDate)
    .slice(-1)[0];

  while (!dayX) {
    month = currentDate.getMonth() + 1;
    if (month === NEXT_YEAR) {
      year = currentDate.getFullYear() + 1;
      month = 0;
    }
    dayX = flightsByMonths[months[month]]
      .filter((flight) => flight.dateFlight > currentDate)
      .sort(sortByDate)
      .slice(-1)[0];
  }

  return dayX;
};

export const getNextFlight = (flights) => {
  const filteredPlannedFlights = filterByPlanned(flights);
  const nextFlight = findNextFlight(filteredPlannedFlights);
  if (!nextFlight) {
    debugger;
  }
  console.log(nextFlight);
  return nextFlight;
};
