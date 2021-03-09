import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppRoute } from "../../const";
import User from "../user/user";
import NextFlight from "../next-flight/next-flight";
import AccordionContainer from "../accordion-container/accordion-container";
import FlightStatistic from "../flight-statistic/flight-statistic";

const useStyles = makeStyles({
  header: {
    background: "#4e85f5",
    padding: "28px 0 8px 20px"
  },
  main: {
    padding: "15px 20px 13px 20px"
  },
});

const MainPage = ({ history }) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);

  return (
    <>
      <Box className={classes.header}>
        <Container maxWidth="xs">
            <Typography
              color="textPrimary"
              variant={matches ? "h4" : "h5"}
              component="h1"
              gutterBottom
            >
              Профиль
            </Typography>
        </Container>
      </Box>
      <Box className={classes.main}>
        <Grid container>
          <User />
          <NextFlight />
          <AccordionContainer style={{width: "350px"}} renderDetails={() => <FlightStatistic />}>Статистика налёта</AccordionContainer>
        </Grid>
      </Box>
    </>
  );
};

export default MainPage;
