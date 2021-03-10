export const ActionType = {
  LOAD_FLIGHTS: "LOAD_FLIGHTS",
  CHANGE_STATISTIC_TYPE: "CHANGE_STATISTIC_TYPE",
  CHANGE_FILTER: "CHANGE_FILTER",
  SEARCH_NEXT_FLIGHT: "SEARCH_NEXT_FLIGHT"
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
  }),
  setNextFlight: () => ({
    type: "SEARCH_NEXT_FLIGHT",
  })
};
