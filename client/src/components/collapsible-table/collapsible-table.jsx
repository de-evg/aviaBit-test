import React from "react";
import PropTypes from "prop-types";
import Row from "../collapsible-table-row/collabsible-table-row";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  th: {
    fontSize: "0.7rem",
    color: "#000000",
    fontWeight: 700,
  },
  td: {
    color: "#676565",
    fontWeight: 400,
  },
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

const CollapsibleTable = ({ flights }) => {
  const classes = useStyles();
  const generateRows = (flights) => flights.map((flight) => createData(flight));
  const rows = generateRows(flights);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.th}>Номер рейса</TableCell>
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
  );
};

CollapsibleTable.propTypes = {
  flights: PropTypes.array.isRequired,
};

export default CollapsibleTable;
