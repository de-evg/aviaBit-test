export const ActionType = {
  LOAD_FLIGHTS: "LOAD_FLIGHTS"
};

export const ActionCreator = {
  loadFlights: (flights) => ({
    type: "LOAD_FLIGHTS",
    payload: flights
  })
};
