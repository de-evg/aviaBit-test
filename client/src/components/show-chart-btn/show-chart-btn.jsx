import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@material-ui/core";

const ShowMoreBtn = ({clickHandler}) => {
  return <Button onClick={clickHandler} variant="contained" color="primary">Статистика налёта</Button>;
};

ShowMoreBtn.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default ShowMoreBtn;