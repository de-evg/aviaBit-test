import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@material-ui/core";
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
  return <Button onClick={clickHandler} variant="contained" className={classes.button}>{children}</Button>;
};

Btn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Btn;