import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Container, Box, useMediaQuery, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {NameSpace} from "../../store/reducers/root";
import DetailsTable from "../details-table/details-table";
import CollapsibleTable from "../collapsible-table/collapsible-table";
import BtnBack from "../btn-back/btn-back";
import {months, StatisticType} from "../../const";
import {ActionCreator} from "../../store/action";
import {generateChartData, getGroupedData} from "../../helpers/statistic";
import PageHeader from "../page-header/page-header";

const createData = (name, data) => {
  return {name, data};
};

const useStyles = makeStyles({
  header: {
    backgroundColor: "#4e85f5",
    padding: "28px 0 8px 20px",
  },
  main: {
    padding: "0 20px 13px 20px",
  },
  title: {
    fontWeight: 700,
    margin: 0,
  },
  grid: {
    flexDirection: "column",
    wrap: "wrap",
  },
  gridItem: {
    marginBottom: "15px",
  },
});

const DetailsPage = ({isFlightsLoaded, statsByInterval, flights, updateStatsInterval, match: {params: {id}}}) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);
  const {
    actualTimeFlight,
    actualTimeBlock,
    actualTimeNight,
    actualTimeBiologicalNight,
    actualTimeWork,
    plannedTimeFlight,
    plannedTimeBlock,
    plannedTimeNight,
    plannedTimeBiologicalNight,
    plannedTimeWork,
    interval,
  } = statsByInterval;

  const [flightsForInterval, setFlightsForInterval] = useState({});
  const [statisticType, setStatisticType] = useState("");

  useEffect(() => {
    const statisticType = id.length === 4 ? StatisticType.YEARS : StatisticType.MONTHS;
    setStatisticType(statisticType);
  }, [id]);

  const actualDataRows = [
    createData("Общее время налёта", actualTimeFlight),
    createData("Общее полётное время", actualTimeBlock),
    createData("Общее ночное время", actualTimeNight),
    createData("Общее время биологической ночи", actualTimeBiologicalNight),
    createData("Общее рабочее время", actualTimeWork),
  ];

  const plannedDataRows = [
    createData("Общее время налёта", plannedTimeFlight),
    createData("Общее полётное время", plannedTimeBlock),
    createData("Общее ночное время", plannedTimeNight),
    createData("Общее время биологической ночи", plannedTimeBiologicalNight),
    createData("Общее рабочее время", plannedTimeWork),
  ];

  useEffect(() => {
    if (!Object.keys(flightsForInterval).length && statisticType && isFlightsLoaded) {
      const interval = statisticType === StatisticType.YEARS ? id : id.slice(-4);
      const groupedData = getGroupedData(flights, statisticType, interval);
      setFlightsForInterval(groupedData);
    }
  }, [isFlightsLoaded, flightsForInterval, flights, statisticType, id]);

  useEffect(() => {
    if (!!Object.keys(flightsForInterval).length) {
      const interval = statisticType === StatisticType.YEARS ? id : id.slice(0, 3);
      const index = statisticType === StatisticType.MONTHS ? months.findIndex((month) => month === interval) : 0;
      const statsByInterval = generateChartData(flightsForInterval[interval], statisticType, id.slice(-4))[index];
      updateStatsInterval(statsByInterval);
    }
  }, [flightsForInterval, updateStatsInterval, statisticType, id]);

  return (
    <>
      <PageHeader>{`Статистика за ${interval}`}</PageHeader>
      <Box
        className={classes.main}
        style={matches ? {padding: "0 17%"} : null}
      >
        <Container maxWidth={matches ? "xl" : "xs"} style={{padding: "15px 0", width: "100%"}}>
          <BtnBack />
        </Container>
        <Grid container justify="center" style={{width: "100%"}}>
          <Grid item style={{marginBottom: "15px", width: "inherit"}}>
            <Container maxWidth={matches ? "xl" : "xs"} style={{padding: "0", width: "100%"}}>
              <Grid container direction={matches ? "row" : "column"} justify="space-between" wrap="wrap" style={{padding: "0", width: "100%"}}>
                <Grid className={classes.gridItem} container item direction="column" style={matches ? {padding: "0", width: "45%"} : null}>
                  <DetailsTable title={"Фактическое время"} rows={actualDataRows} style={{minWidth: "100%"}} />
                </Grid>
                <Grid container item direction="column" style={matches ? {padding: "0", width: "45%"} : null}>
                  <DetailsTable title={"Плановое время"} rows={plannedDataRows} style={{minWidth: "100%"}} />
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Container maxWidth={matches ? "xl" : "xs"} style={{padding: "0", width: "100%"}}>
            {
              !!Object.keys(flightsForInterval).length && statsByInterval.name && <CollapsibleTable flights={flightsForInterval[statsByInterval.name]} />
            }

          </Container>
        </Grid>

      </Box>
    </>
  );
};

DetailsPage.propTypes = {
  statsByInterval: PropTypes.object.isRequired,
  flights: PropTypes.array.isRequired,
  updateStatsInterval: PropTypes.func.isRequired,
  isFlightsLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  statsByInterval: state[NameSpace.STATISTIC].statsByInterval,
  flights: state[NameSpace.FLIGHTS].flights,
  isFlightsLoaded: state[NameSpace.FLIGHTS].isFlightsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  updateStatsInterval(stats) {
    dispatch(ActionCreator.setStatsInterval(stats));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
