import { generateFlights } from "../../../mock/flights";
import { ActionType } from "../../action";

const initialState = {
  flights: [],
  isFlightsLoaded: false
};

export const flightsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      const flights = generateFlights();
      return { ...state, flights, isFlightsLoaded: true };

    default:
      return state;
  }
};
