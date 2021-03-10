import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import User from "../user/user";
import NextFlight from "../next-flight/next-flight";
import AccordionContainer from "../accordion-container/accordion-container";
import FlightStatistic from "../flight-statistic/flight-statistic";
import ShowMoreBtn from "../show-chart-btn/show-chart-btn";

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
    margin: 0
  },
  grid: {
    flexDirection: "column",
    flexBasis: "280px",
    width: "280px",
    height: "593px",
    wrap: "wrap"
  },
  gridItem: {
    borderBottom: "1px solid rgba(16, 66, 195, 0.15)"
  }
});

const MainPage = ({history}) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);

  return (
    <>
      <Box className={classes.header} style={matches ? {background: "url(./img/wing.png)", padding: "50px 0 40px 0"} : null}>
        <Container maxWidth={matches ? "xl" : "xs"} style={matches ? {padding: "0 246px"} : null}>
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
      <Box className={classes.main} style={matches ? {padding: "0 246px"} : null}>
        <Grid container className={classes.grid}>
          <Grid className={classes.gridItem} style={matches ? {width: "474px"} : null}>
            <User />
          </Grid>
          <Grid className={classes.gridItem} style={matches ? {width: "474px", padding: "29px 0 33px 0"} : null}>
            <NextFlight />
          </Grid>
          {matches
            ? <ShowMoreBtn clickHandler={() => {}} />
            : <AccordionContainer
              style={{width: "350px"}}
              renderDetails={() => <FlightStatistic />}
            >
              Статистика налёта
            </AccordionContainer>}

        </Grid>
      </Box>
    </>
  );
};

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default MainPage;
