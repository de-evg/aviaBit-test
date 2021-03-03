import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import { AppRoute } from "../../const";
import MainPage from "../main-page/main-page";
import DetailsPage from "../details-page/details-page";

const App = ({ isFlightsLoaded, getFlights }) => {
  useEffect(() => {
    if (!isFlightsLoaded) {
      getFlights();
    }
  }, [isFlightsLoaded, getFlights]);

  return (
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
