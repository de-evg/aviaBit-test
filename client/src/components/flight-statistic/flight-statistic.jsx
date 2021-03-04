import React from "react";
import {
  Typography,
  Grid,
} from "@material-ui/core";
import Chart from "../chart/chart";

const FlightStatistic = () => {
  return (
    <Grid container>
      <Typography style={{ boxSizing: "border-box", maxWidth: "290px" }}>
        Общая статистика налета и рабочего времени
      </Typography>
      <Chart style={{ boxSizing: "border-box", maxWidth: "290px" }} />
    </Grid>
  );
};

export default FlightStatistic;
