import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Chart from "../chart/chart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  label: {
    color: "#676565",
    fontWeight: 400,
    fontSize: "12px",
  },
  userMail: {
    color: "#676565",
    fontWeight: 400,
  },
  expandIcon: {
    position: "relative",
    color: "#4e85f5",
  },
});

const FlightStatistic = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Typography className={classes.label}>
        Общая статистика налета и рабочего времени
      </Typography>
      <Chart />
    </Grid>
  );
};

export default FlightStatistic;
