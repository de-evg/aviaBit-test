import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {NameSpace} from "../../store/reducers/root";
import {getChartData} from "../../store/selectors";
import NewButton from "../new-button/new-button";




const Chart = ({chartData}) => {
  const [isToggled, setToggle] = useState(false);

  const handleBtnClick = useCallback(() => {
    setToggle(!isToggled);
  }, [isToggled]);
  return (
    <>
      <NewButton clickHandler={handleBtnClick}>Переключить</NewButton>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          isToggled && <Bar dataKey="actualTimeFlight" name="Фактическое время налета" stackId="a" fill="#88ddd8" />
        }
        {
          isToggled && <Bar dataKey="plannedTimeFlight" name="Плановое время налета" stackId="a" fill="#82ca00" />
        }
        {
          !isToggled &&<Bar dataKey="actualTimeWork" name="Фактическое время работы" stackId="a" fill="#88ddd8" />
        }
        {
          !isToggled && <Bar dataKey="plannedTimeWork" name="Плановое время работы" stackId="a" fill="#82ca00" />
        }


      </BarChart>
    </>
  );
};

Chart.propTypes = {

};

const mapStateToProps = (state) => ({
  chartData: getChartData(state),

});

export default connect(mapStateToProps)(Chart);
