import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import { AppRoute } from "../../const";
import MainPage from "../main-page/main-page";
import DetailsPage from "../details-page/details-page";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const App = ({ isFlightsLoaded, getFlights }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundColor: "#ffffff"
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
        secondary: "#000000",
        third: "#676565",
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

  useEffect(() => {
    if (!isFlightsLoaded) {
      getFlights();
    }
  }, [isFlightsLoaded, getFlights]);

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

App.propTypes = {
  isFlightsLoaded: PropTypes.bool.isRequired,
  getFlights: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFlightsLoaded: state[NameSpace.FLIGHTS].isFlightsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getFlights() {
    dispatch(ActionCreator.loadFlights());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
