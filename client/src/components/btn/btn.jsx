import React from "react";
import PropTypes from 'prop-types';
import { Button, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#f1f1f1",
    border: "1px solid #c4c4c4",
    boxShadow: "none",
    textTransform: "unset",
    fontWeight: 700
  }
});

const Btn = ({clickHandler, children}) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);
  return <Button onClick={clickHandler} variant="contained" className={classes.button} style={matches ? null : {width: "100%"}}>{children}</Button>;
};

Btn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Btn;