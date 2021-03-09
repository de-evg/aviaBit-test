import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getChartData } from "../../store/selectors";
import Toggle from "../toggle/toggle";
import { Grid } from "@material-ui/core";
import { ActionCreator } from "../../store/action";
import { StatisticType } from "../../const";
import Select from "../select/select";

const times = ["Время работы", "Время налёта"];
const intervals = ["Годы", "Месяцы"];

const Chart = ({ chartData, toggleStatisticType }) => {
  const [isTimeToggled, setTimeToggle] = useState(false);
  const [isStatisticTypeToggled, setStatisticToggle] = useState(false);

  const handleChangeToggle = useCallback(() => {
    setTimeToggle(!isTimeToggled);
  }, [isTimeToggled]);

  const handleStatisticToggle = useCallback(() => {
    setStatisticToggle(!isStatisticTypeToggled);
  }, [isStatisticTypeToggled]);

  useEffect(() => {
    toggleStatisticType(
      isStatisticTypeToggled ? StatisticType.MONTHS : StatisticType.YEARS
    );
  }, [isStatisticTypeToggled, toggleStatisticType]);

  return (
    <Grid container>
      <Toggle changeHandler={handleStatisticToggle} labels={intervals} />
      <Toggle changeHandler={handleChangeToggle} labels={times} />
      {isStatisticTypeToggled && <Select />}
      <div style={{ width: "100%", height: "250px", left: "-20px" }}>
        <ResponsiveContainer>
          <BarChart width="100%" height={250} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            {isTimeToggled && (
              <Bar
                barSize={10}
                dataKey="actualTimeFlight"
                name="Фактическое время налета"
                stackId="a"
                fill="rgb(78, 133, 245)"
              />
            )}
            {isTimeToggled && (
              <Bar
                onClick={handleBarClick}
                barSize={10}
                dataKey="plannedTimeFlight"
                name="Плановое время налета"
                stackId="a"
                fill="rgba(78, 133, 245, 0.6)"
              />
            )}
            {!isTimeToggled && (
              <Bar
                onClick={handleBarClick}
                barSize={10}
                dataKey="actualTimeWork"
                name="Фактическое время работы"
                stackId="a"
                fill="rgb(78, 133, 245)"
              />
            )}
            {!isTimeToggled && (
              <Bar
                onClick={handleBarClick}
                barSize={10}
                dataKey="plannedTimeWork"
                name="Плановое время работы"
                stackId="a"
                fill="rgba(78, 133, 245, 0.6)"
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Grid>
  );
};

Chart.propTypes = {};

const mapStateToProps = (state) => ({
  chartData: getChartData(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleStatisticType(type) {
    dispatch(ActionCreator.changeStatisticType(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
