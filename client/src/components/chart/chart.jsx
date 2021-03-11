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
import { AppRoute, StatisticType } from "../../const";
import Select from "../select/select";
import {useHistory} from "react-router";

const times = ["Время работы", "Время налёта"];
const intervals = ["Годы", "Месяцы"];

const Chart = ({ chartData, toggleStatisticType, updateDetailsInterval }) => {
  let history = useHistory();
  console.log(history);

  const [isTimeToggled, setTimeToggle] = useState(false);
  const [isStatisticTypeToggled, setStatisticToggle] = useState(false);
  const bootomGap = isStatisticTypeToggled
    ? { marginBottom: "0" }
    : { marginBottom: "30px" };

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

  const handleBarClick = useCallback((evt) => {
    updateDetailsInterval(evt.payload);
    history.push(AppRoute.DETAILS);
  }, [updateDetailsInterval, history]);

  return (
    <Grid container>
      <Toggle changeHandler={handleStatisticToggle} labels={intervals} />
      <Toggle
        style={bootomGap}
        changeHandler={handleChangeToggle}
        labels={times}
      />
      <Grid
        item
        style={{ padding: "10px 0", minHeight: "50px", minWidth: "100%" }}
      >
        {isStatisticTypeToggled && <Select />}
      </Grid>

      <Grid
        item
        style={{ padding: "10px 0", minHeight: "300px", minWidth: "100%" }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <ResponsiveContainer>
            <BarChart
              width={280}
              height={320}
              data={chartData}
              margin={{ left: -25, right: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Legend
                wrapperStyle={{ position: "relative" }}
                layout="horizontal"
                verticalAlign="bottom"
                align="right"
              />
              <XAxis dataKey="name" />
              <YAxis />

              {isTimeToggled && (
                <Bar
                  onClick={handleBarClick}
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
    </Grid>
  );
};

Chart.propTypes = {
  chartData: PropTypes.array.isRequired,
  toggleStatisticType: PropTypes.func.isRequired,
  updateDetailsInterval: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  chartData: getChartData(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleStatisticType(type) {
    dispatch(ActionCreator.changeStatisticType(type));
  },
  updateDetailsInterval(interval) {
    dispatch(ActionCreator.setDetailsInterval(interval));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
