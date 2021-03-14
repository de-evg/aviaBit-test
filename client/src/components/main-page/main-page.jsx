import React, {useCallback, useState} from "react";
import PropTypes from 'prop-types';
import {
  Box,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import User from "../user/user";
import NextFlight from "../next-flight/next-flight";
import AccordionContainer from "../accordion-container/accordion-container";
import FlightStatistic from "../flight-statistic/flight-statistic";
import Btn from "../btn/btn";
import Chart from "../chart/chart";
import {connect} from "react-redux";
import {NameSpace} from "../../store/reducers/root";
import NoPlannedFlights from "../no-planned-flights/no-planned-flights";
import PageHeader from "../page-header/page-header";
import {fetchFlights} from "../../store/api-actions";

const useStyles = makeStyles({
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

const MainPage = ({noNextFlight, isLoadError, loadFlights}) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);
  const [isChartShowed, setChartShowStatus] = useState(false);

  const handleShowChartBtnClick = useCallback(() => {
    setChartShowStatus(!isChartShowed);
  }, [isChartShowed]);

  const handleLoadFlightBtnClick = useCallback(() => {
    loadFlights();
  }, [loadFlights]);

  return (
    <>
      <PageHeader>Профиль</PageHeader>
      <Box
        className={classes.main}
        style={matches ? {padding: "0 17%"} : null}
      >
        <Grid
          container
          className={classes.grid}
          style={matches ? {height: "593px"} : null}
        >
          <Grid
            item
            container
            className={classes.gridItem}
            style={
              matches
                ? {
                  flexDirection: "row",
                  borderBottom: "1px solid rgba(16, 66, 195, 0.15)",
                }
                : null
            }
          >
            <Grid item style={{width: "50%"}}>
              <User />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-end"
              justify="center"
              style={{width: "50%"}}
            >
              {matches && !isLoadError && <Btn clickHandler={handleShowChartBtnClick}>Статистика налёта</Btn>}
            </Grid>
          </Grid>
          <Grid container justify="space-between" style={{paddingTop: "20px"}}>
            <Grid
              item
              className={classes.gridItem}
              style={
                matches ? {width: "45%", padding: "29px 0 33px 0"} : null
              }
            >
              {noNextFlight ? <NoPlannedFlights /> : <NextFlight />}
            </Grid>
            {!matches && !isLoadError && (
              <AccordionContainer
                style={{width: "350px"}}
                renderDetails={() => <FlightStatistic />}
              >
                Статистика налёта
              </AccordionContainer>
            )}
            {isChartShowed ? (
              <Grid
                item
                style={
                  matches
                    ? {
                      width: "45%",
                    }
                    : null
                }
              >
                <Chart />
              </Grid>
            ) : null}
          </Grid>
          {isLoadError && <Grid item> <Btn clickHandler={handleLoadFlightBtnClick}>Поробовать ещё раз</Btn></Grid>}
        </Grid>
      </Box>
    </>
  );
};

MainPage.propTypes = {
  noNextFlight: PropTypes.bool.isRequired,
  isLoadError: PropTypes.bool.isRequired,
  loadFlights: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  noNextFlight: state[NameSpace.FLIGHTS].noNextFlight,
  isLoadError: state[NameSpace.FLIGHTS].isLoadError,
});

const mapDispatchToProps = (dispatch) => ({
  loadFlights() {
    dispatch(fetchFlights())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
