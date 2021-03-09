import { generateFlights } from "../../../mock/flights";
import { ActionType } from "../../action";
import {getNextFlight} from "../../selectors";

const initialState = {
  flights: [],
  isFlightsLoaded: false,
  nextFlight: {}
};

export const flightsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      const flights = generateFlights();
      const nextFlight = getNextFlight(flights);
      return { ...state, flights, isFlightsLoaded: true, nextFlight: nextFlight};

    default:
      return state;
  }
};
