import React, { useCallback } from "react";
import PropTypes from "prop-types";
import NewButton from "../new-button/new-button";
import { Container, Box, Typography, useMediaQuery } from "@material-ui/core";
import { AppRoute } from "../../const";

const MainPage = ({ history }) => {
  const matches = useMediaQuery(`(min-width: 600px)`);

  const hanldeBtnClick = useCallback(() => {
    history.push(AppRoute.DETAILS);
  }, [history]);

  return (
    <>
      {
        <Container maxWidth="xs">
          <Box my={4} textAlign="center">
            <Typography
              variant={matches ? "h4" : "h5"}
              component="h1"
              gutterBottom
            >
              Профиль сотрудника
            </Typography>

            <NewButton clickHandler={hanldeBtnClick}>Подробности</NewButton>
          </Box>
        </Container>
      }
    </>
  );
};

export default MainPage;
