import React from "react";
import PropTypes from "prop-types";
import Row from "../collapsible-table-row/collabsible-table-row";
import {makeStyles} from "@material-ui/core/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  th: {
    minWidth: "80px",
    fontSize: "0.7rem",
    color: "#000000",
    fontWeight: 700,
  },
  td: {
    color: "#676565",
    fontWeight: 400,
  },
  title: {
    marginBottom: "5px"
  }
});

const createData = (flightData) => {
  const {
    dateFlight,
    flight,
    takeoff,
    landing,
    pln,
    plnType,
    timeFlight,
    timeBlock,
    timeNight,
    timeBiologicalNight,
    timeWork,
    type,
  } = flightData;
  return {
    dateFlight: dateFlight.toLocaleString(),
    flight: flight,
    pln: pln,
    plnType: plnType,
    from: takeoff.name,
    fromLat: takeoff.lat,
    fromLong: takeoff.long,
    to: landing.name,
    toLat: landing.lat,
    toLong: landing.long,
    timeFlight,
    timeBlock,
    timeNight,
    timeBiologicalNight,
    timeWork,
    type: type ? "Плановый" : "Фактический",
  };
};

const CollapsibleTable = ({flights}) => {
  const classes = useStyles();
  const generateRows = (flights) => flights.map((flight) => createData(flight));
  const rows = generateRows(flights);

  return (
    <>
      <Typography
        className={classes.title}
        variant="h6"
        color={"textSecondary"}
        id="tableTitle"
        component="h3"
      >
        Полёты
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className={classes.th}>№ рейса</TableCell>
              <TableCell className={classes.th} align="right">
                Дата рейса
            </TableCell>
              <TableCell className={classes.th} align="right">
                Откуда
            </TableCell>
              <TableCell className={classes.th} align="right">
                Куда
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <Row key={`${row.name}-${i}`} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

CollapsibleTable.propTypes = {
  flights: PropTypes.array.isRequired,
};

export default CollapsibleTable;
