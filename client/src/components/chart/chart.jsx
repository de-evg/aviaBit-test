import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { NameSpace } from "../../store/reducers/root";
import { getChartData } from "../../store/selectors";
import NewButton from "../new-button/new-button";
import { Grid } from "@material-ui/core";

const Chart = ({ chartData }) => {
  const [isToggled, setToggle] = useState(false);

  const handleBtnClick = useCallback(() => {
    setToggle(!isToggled);
  }, [isToggled]);
  return (
    <Grid container>
      <NewButton clickHandler={handleBtnClick}>Переключить</NewButton>
      <div style={{width: "100%", height: "250px"}}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={250}
            data={chartData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {isToggled && (
              <Bar
                barSize={10}
                dataKey="actualTimeFlight"
                name="Фактическое время налета"
                stackId="a"
                fill="#88ddd8"
              />
            )}
            {isToggled && (
              <Bar
                barSize={10}
                dataKey="plannedTimeFlight"
                name="Плановое время налета"
                stackId="a"
                fill="#82ca00"
              />
            )}
            {!isToggled && (
              <Bar
                barSize={10}
                dataKey="actualTimeWork"
                name="Фактическое время работы"
                stackId="a"
                fill="#88ddd8"
              />
            )}
            {!isToggled && (
              <Bar
                barSize={10}
                dataKey="plannedTimeWork"
                name="Плановое время работы"
                stackId="a"
                fill="#82ca00"
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

export default connect(mapStateToProps)(Chart);
