import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/app/app";
import root from "./store/reducers/root";
import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(root, composeWithDevTools());

render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);
