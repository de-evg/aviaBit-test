import { ActionType } from "../../action";
import { getNextFlight } from "../../../helpers/flights";
import { adaptServerToClient } from "../../../helpers/adapter";

const initialState = {
  flights: [],
  isFlightsLoaded: false,
  nextFlight: {
    date: "",
    flightNumber: "",
    plnType: "",
    pln: "",
  },
  isNextFlightFinded: false,
  noNextFlight: false,
};

export const flightsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      const apdaptedFlights = action.payload.map((flight) =>
        adaptServerToClient(flight)
      );
      return { ...state, flights: apdaptedFlights, isFlightsLoaded: true };
    case ActionType.SEARCH_NEXT_FLIGHT:
      const nextFlight = getNextFlight(state.flights);
      if (nextFlight === "not found") {
        return {
          ...state,
          nextFlight: {
            date: "",
            flightNumber: "",
            plnType: "",
            pln: "",
          },
          isNextFlightFinded: false,
          noNextFlight: true,
        };
      }
      return { ...state, nextFlight: nextFlight, isNextFlightFinded: true, noNextFlight: false, };

    default:
      return state;
  }
};
