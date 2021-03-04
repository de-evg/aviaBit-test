import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import { AppRoute } from "../../const";
import User from "../user/user";
import NextFlight from "../next-flight/next-flight";
import AccordionContainer from "../accordion-container/accordion-container";
import FlightStatistic from "../flight-statistic/flight-statistic";

const MainPage = ({ history }) => {
  const matches = useMediaQuery(`(min-width: 600px)`);

  return (
    <>
      <Box bgcolor="secondary.main">
        <Container maxWidth="xs">
          <Box pt={14} pl={10} pb={4} textAlign="left">
            <Typography
              color="textPrimary"
              variant={matches ? "h4" : "h5"}
              component="h1"
              gutterBottom
            >
              Профиль
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box px={10} pt={7.5} pb={6.5}>
        <Grid container spacing={5} bgcolor="primary.main">
          <User />
          <NextFlight />
          <AccordionContainer renderDetails={() => <FlightStatistic />}>Статистика налёта</AccordionContainer>
        </Grid>
      </Box>
    </>
  );
};

export default MainPage;
