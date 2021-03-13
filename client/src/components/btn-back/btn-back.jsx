import React from "react";
import PropTypes from 'prop-types';
import {useMediaQuery} from "@material-ui/core";
import {useHistory} from "react-router";
import {AppRoute} from "../../const";
import Btn from "../btn/btn";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const BtnBack = ({resetStats}) => {
  const history = useHistory();
  const matches = useMediaQuery(`(min-width: 600px)`);

  const handleClick = (evt) => {
    evt.preventDefault();
    resetStats()
    history.push(AppRoute.MAIN);
    window.scrollTo(0, 0);
  };

  return (
    <Btn color="initial" clickHandler={handleClick} style={matches ? null : {width: "100%"}}>
      Назад
    </Btn>
  );
};

BtnBack.propTypes = {
  resetStats: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  resetStats() {
    dispatch(ActionCreator.resetStatsInterval());
  },
});

export default connect(null, mapDispatchToProps)(BtnBack);
