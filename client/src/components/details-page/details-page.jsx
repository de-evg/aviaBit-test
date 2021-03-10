import React from "react";
import { Container, Box, Typography, useMediaQuery } from "@material-ui/core";
import Chart from "../chart/chart";

const DetailsPage = () => {
  const matches = useMediaQuery(`(min-width: 600px)`);

  return (
    <Container maxWidth="xs">
      <Box my={4} textAlign="center">
        <Typography variant={matches ? "h4" : "h5"} component="h2" gutterBottom>
          Детали
        </Typography>
        <Box minHeight="400px">
          <Chart my={4} />
        </Box>
      </Box>
    </Container>
  );
};

export default DetailsPage;
