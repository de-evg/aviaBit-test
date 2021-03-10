export const sortByDate = (flightA, flightB) => {
  if (flightA.dateFlight - flightB.dateFlight > 0) {
    return 1;
  }

  if (flightA.dateFlight - flightB.dateFlight < 0) {
    return -1;
  }

  return 0;
};
