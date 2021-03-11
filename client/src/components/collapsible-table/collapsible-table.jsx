import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {connect} from "react-redux";
import {NameSpace} from "../../store/reducers/root";

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
  }
});

const createData = (flightData) => {
  const {
    dateFlight,
    flight,
    takeoff,
    landing,
    pln,
    timeFlight,
    timeBlock,
    timeNight,
    timeBiologicalNight,
    timeWork,
    type,
  } = flightData;
  return {
    dateFlight: dateFlight.toLocaleString(),
    takeoff: takeoff.name,
    landing: landing.name,
    flight: flight,
    details: [
      {
        date: dateFlight,
        from: takeoff.name,
        fromLat: takeoff.lat,
        fromLong: takeoff.long,
        to: landing.name,
        toLat: landing.lat,
        toLong: landing.long,
        plaine: pln,
        timeFlight,
        timeBlock,
        timeNight,
        timeBiologicalNight,
        timeWork,
        type,
      },
    ],
  };
};

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className={classes.th}>
          {row.flight}
        </TableCell>
        <TableCell className={classes.td} align="right">{row.dateFlight}</TableCell>
        <TableCell className={classes.td} align="right">{row.takeoff}</TableCell>
        <TableCell className={classes.td} align="right">{row.landing}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Детали полета
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Дата</TableCell>
                    <TableCell>АЭР ВЗЛ</TableCell>
                    <TableCell>АЭР ВЗЛ ШИРОТА</TableCell>
                    <TableCell>АЭР ВЗЛ ДОЛГОТА</TableCell>
                    <TableCell>АЭР ПОС</TableCell>
                    <TableCell>Аэродром посадки</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.date}>
                      <TableCell component="th" scope="row">
                        {detailsRow.date}
                      </TableCell>
                      <TableCell>{detailsRow.from}</TableCell>
                      <TableCell align="right">{detailsRow.to}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




const CollapsibleTable = ({flights}) => {
  const classes = useStyles();
  const generateRows = (flights) => {
    return flights.map((flight) => {
      return createData(flight);
    });
  };

  const rows = generateRows(flights);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.th}>Номер рейса</TableCell>
            <TableCell className={classes.th} align="right">Дата рейса</TableCell>
            <TableCell className={classes.th} align="right">Откуда</TableCell>
            <TableCell className={classes.th} align="right">Куда</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  flights: state[NameSpace.FLIGHTS].flights
});

export default connect(mapStateToProps)(CollapsibleTable);
