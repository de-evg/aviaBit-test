export const ActionType = {
  LOAD_FLIGHTS: "LOAD_FLIGHTS",
  CHANGE_STATISTIC_TYPE: "CHANGE_STATISTIC_TYPE",
  CHANGE_FILTER: "CHANGE_FILTER"
};

export const ActionCreator = {
  loadFlights: (flights) => ({
    type: "LOAD_FLIGHTS",
    payload: flights
  }),
  changeStatisticType: (type) => ({
    type: "CHANGE_STATISTIC_TYPE",
    payload: type
  }),
  changeFilter: (filter) => ({
    type: "CHANGE_FILTER",
    payload: filter
  })
};
