import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    boxSizing: "content-box",
    boxShadow: "none",
    maxWidth: "100%",
  },
  accordionItem: {
    padding: "0",
  },
  label: {
    fontWeight: 700,
  },
  userMail: {
    color: "#676565",
    fontWeight: 400,
  },
  expandIcon: {
    position: "relative",
    color: "#4e85f5",
  },
});

const AccordionContainer = ({ children, renderDetails }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.accordionItem}
        >
          <Typography className={classes.label}>{children}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionItem}>
          {renderDetails()}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

AccordionContainer.propTypes = {
  children: PropTypes.string.isRequired,
  renderDetails: PropTypes.func.isRequired,
};

export default AccordionContainer;
