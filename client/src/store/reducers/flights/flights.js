import { generateFlights } from "../../../mock/flights";
import { ActionType } from "../../action";
import { getNextFlight } from "../../../helpers/flights";

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
};

export const flightsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      const flights = generateFlights();
      return { ...state, flights, isFlightsLoaded: true };
    case ActionType.SEARCH_NEXT_FLIGHT:
      const nextFlight = getNextFlight(state.flights);
      return { ...state, nextFlight: nextFlight, isNextFlightFinded: true };

    default:
      return state;
  }
};
