import React, { useCallback, useState } from "react";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import User from "../user/user";
import NextFlight from "../next-flight/next-flight";
import AccordionContainer from "../accordion-container/accordion-container";
import FlightStatistic from "../flight-statistic/flight-statistic";
import ShowMoreBtn from "../show-chart-btn/show-chart-btn";
import Chart from "../chart/chart";
import SimpleBreadcrumbs from "../simple-breadcrumbs/simple-breadcrumbs";
import { AppRoute } from "../../const";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import NoPlannedFlights from "../no-planned-flights/no-planned-flights";

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

const MainPage = ({ noNextFlight }) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);
  const [isChartShowed, setChartShowStatus] = useState(false);

  const handleShowChartBtnClick = useCallback(() => {
    setChartShowStatus(!isChartShowed);
  }, [isChartShowed]);

  return (
    <>
      <Box
        className={classes.header}
        style={
          matches
            ? { background: "url(./img/wing.png)", padding: "50px 0 40px 0" }
            : null
        }
      >
        <SimpleBreadcrumbs currentRoute={AppRoute.MAIN} />
        <Container
          maxWidth={matches ? "xl" : "xs"}
          style={matches ? { padding: "0 17%" } : null}
        >
          <Typography
            className={classes.title}
            color={matches ? "textSecondary" : "textPrimary"}
            variant={matches ? "h4" : "h5"}
            component="h1"
            gutterBottom
          >
            Профиль
          </Typography>
        </Container>
      </Box>
      <Box
        className={classes.main}
        style={matches ? { padding: "0 17%" } : null}
      >
        <Grid
          container
          className={classes.grid}
          style={matches ? { height: "593px" } : null}
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
            <Grid item style={{ width: "50%" }}>
              <User />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-end"
              justify="center"
              style={{ width: "50%" }}
            >
              <ShowMoreBtn clickHandler={handleShowChartBtnClick} />
            </Grid>
          </Grid>
          <Grid container justify="space-between" style={{paddingTop: "20px"}}>
            <Grid
              className={classes.gridItem}
              style={
                matches ? { width: "50%", padding: "29px 0 33px 0" } : null
              }
            >
              {noNextFlight ? <NoPlannedFlights /> : <NextFlight />}
            </Grid>
            {matches ? null : (
              <AccordionContainer
                style={{ width: "350px" }}
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
                        width: "50%",
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
