import React, {useCallback, useState} from "react";
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

const MainPage = ({noNextFlight}) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);
  const [isChartShowed, setChartShowStatus] = useState(false);

  const handleShowChartBtnClick = useCallback(() => {
    setChartShowStatus(!isChartShowed);
  }, [isChartShowed]);

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
              {matches && <Btn clickHandler={handleShowChartBtnClick}>Статистика налёта</Btn>}
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
            {matches ? null : (
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
        </Grid>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  noNextFlight: state[NameSpace.FLIGHTS].noNextFlight,
});

export default connect(mapStateToProps)(MainPage);
