import React from "react";
import PropTypes from "prop-types";
import { Container, Box, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import DetailsTable from "../details-table/details-table";
import CollapsibleTable from "../collapsible-table/collapsible-table";
import { getFlightsForInterval } from "../../store/selectors";
import SimpleBreadcrumbs from "../simple-breadcrumbs/simple-breadcrumbs";
import { AppRoute } from "../../const";

const createData = (name, data) => {
  return { name, data };
};

const useStyles = makeStyles({
  header: {
    backgroundColor: "#4e85f5",
    padding: "28px 0 8px 20px",
  },
  main: {
    padding: "15px 20px 13px 20px",
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
    width: "100%",
  },
});

const DetailsPage = ({ statsByInterval, flightsForInterval }) => {
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

  return (
    <Container maxWidth={matches ? "md" : "xs"}>
      <Box my={8} pl={10}>
        <SimpleBreadcrumbs currentRoute={AppRoute.DETAILS} />
      </Box>
      <Box my={4} textAlign="center" className={classes.main}>
        <Typography variant={matches ? "h4" : "h5"} component="h2" gutterBottom>
          {`Статистика за ${interval}`}
        </Typography>
        <Container maxWidth={matches ? "sm" : "xs"}>
          <Box my={10}>
            <DetailsTable title={"Фактическое время"} rows={actualDataRows} />
            <DetailsTable title={"Плановое время"} rows={plannedDataRows} />
          </Box>
        </Container>
        <CollapsibleTable flights={flightsForInterval[statsByInterval.name]} />
      </Box>
    </Container>
  );
};

DetailsPage.propTypes = {
  statsByInterval: PropTypes.object.isRequired,
  flightsForInterval: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  statsByInterval: state[NameSpace.STATISTIC].statsByInterval,
  flightsForInterval: getFlightsForInterval(state),
});

export default connect(mapStateToProps)(DetailsPage);
