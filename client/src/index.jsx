import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./components/app/app";
import root from "./store/reducers/root";
import Api from "./api/api";
import { fetchFlights } from "./store/api-actions";

const BACKEND_URL = `http://192.168.1.68:8080`;

const api = new Api(BACKEND_URL);
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

Promise.all([store.dispatch(fetchFlights())])
  .then(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log(err);
  });
