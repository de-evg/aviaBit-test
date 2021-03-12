import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../main-page/main-page";
import DetailsPage from "../details-page/details-page";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const App = () => {
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundColor: "#ffffff",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#e5e5e5",
      },
      secondary: {
        main: "#4e85f5",
      },
      text: {
        primary: "#ffffff",
        secondary: "#4e85f5",
      },
    },
    background: {
      default: "#e5e5e5",
    },
    typography: {
      body1: {
        fontWeight: 400,
        color: "#000000",
      },
      body2: {
        fontWeight: 700,
        color: "#676565",
      },
      h5: {
        fontWeight: 700,
      },
    },
    spacing: 2,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={AppRoute.MAIN}
            render={(props) => <MainPage history={props.history} />}
          ></Route>
          <Route exact path={AppRoute.DETAILS} render={() => <DetailsPage />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
