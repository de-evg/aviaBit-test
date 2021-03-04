import React from "react";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordionContainer = ({ children, renderDetails }) => {
  return (
    <Grid item>
      <Accordion
        style={{
          boxSizing: "border-box",
          boxShadow: "none",
          maxWidth: "280px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ boxSizing: "border-box", maxWidth: "290px" }}>
            {children}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ boxSizing: "border-box", maxWidth: "290px" }}
        >
          {renderDetails()}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default AccordionContainer;
