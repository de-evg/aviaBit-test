import { APIRoute } from "../const";
import { ActionCreator } from "./action";

export const fetchFlights = () => (dispatch, _getState, api) =>
  api
    .getFlights(APIRoute.FETCH_FLIGHTS)
    .then((flights) => dispatch(ActionCreator.loadFlights(flights)));
