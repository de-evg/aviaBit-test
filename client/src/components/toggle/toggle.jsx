import React, { useState } from "react";
import { Switch, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  labelFont: {
    padding: "5px",
    fontSize: "12px",
    fontWeight: 700,
    borderRadius: "5px"
  },
  gridItem: {
    flexBasis: "33%",
    width: "33%",
    flexGrow: "1"
  }
});

const BlueSwitch = withStyles({
  switchBase: {
    color: "#4e85f5",
    margin: "0 auto"
  },
  checked: {},
  track: { backgroundColor: "#4e85f5" },
})(Switch);

const Toggle = ({ changeHandler, labels }) => {
  const classes = useStyles();
  const [leftLabel, rightLabel] = labels;

  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.checked });
    changeHandler();
  };

  return (
    <Container style={{padding: "0"}}>
      <Grid component="label" container justify="space-between" alignItems="center">
        <Grid item className={classes.gridItem} style={{textAlign: "right"}}>
          <Typography
            className={classes.labelFont}
            style={!state.checkedA ? { border: "2px solid #4e85f5", padding: "3px",} : {}}
            component="p"
          >
            {leftLabel}
          </Typography>
        </Grid>
        <Grid item>
          <BlueSwitch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "statistic type toggle" }}
            className={classes.switchBase}
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Typography
            className={classes.labelFont}
            style={state.checkedA ? { border: "2px solid #4e85f5", padding: "3px"  } : {}}
            component="p"
          >
            {rightLabel}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Toggle;
