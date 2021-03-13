import React from 'react';
import {Container, Box, Typography, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#4e85f5",
    padding: "28px 0 8px 20px",
  },
});

const PageHeader = ({children}) => {
  const matches = useMediaQuery(`(min-width: 600px)`);
  const classes = useStyles();

  return (
    <Box
      className={classes.header}
      style={
        matches
          ? {background: "url(/img/wing.png)", padding: "50px 0 30px 0"}
          : null
      }
    >
      <Container
        maxWidth={matches ? "xl" : "xs"}
        style={matches ? {padding: "0 17%"} : null}
      >
        <Typography className={classes.title}
          color={matches ? "textSecondary" : "textPrimary"}
          variant={matches ? "h4" : "h5"}
          component="h1"
          gutterBottom>
          {children}
        </Typography>
      </Container>
    </Box>
  );
};

export default PageHeader;
