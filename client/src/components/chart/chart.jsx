import React, {useCallback, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {getChartData} from "../../store/selectors";
import Toggle from "../toggle/toggle";
import {Grid} from "@material-ui/core";
import {ActionCreator} from "../../store/action";
import {StatisticType} from "../../const";
import Select from "../select/select";

const times = ["Время работы", "Время налёта"];
const intervals = ["Годы", "Месяцы"];

const Chart = ({chartData, toggleStatisticType}) => {
  const [isTimeToggled, setTimeToggle] = useState(false);
  const [isStatisticTypeToggled, setStatisticToggle] = useState(false);
  const bootomGap = isStatisticTypeToggled ? {marginBottom: "0"} : {marginBottom: "30px"};

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
      <Toggle style={bootomGap} changeHandler={handleChangeToggle} labels={times} />
      <Grid item style={{padding: "10px 0", minHeight: "50px", minWidth: "100%"}}>
        {isStatisticTypeToggled && <Select />}
      </Grid>

      <div style={{width: "100%", height: "250px", left: "-20px", bottom: "-20px"}}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend verticalAlign="bottom" />
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
                barSize={10}
                dataKey="plannedTimeFlight"
                name="Плановое время налета"
                stackId="a"
                fill="rgba(78, 133, 245, 0.6)"
              />
            )}
            {!isTimeToggled && (
              <Bar
                barSize={10}
                dataKey="actualTimeWork"
                name="Фактическое время работы"
                stackId="a"
                fill="rgb(78, 133, 245)"
              />
            )}
            {!isTimeToggled && (
              <Bar
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
