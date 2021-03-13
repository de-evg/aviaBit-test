import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const mapFlightParam = {
  dateFlight: "Дата",
  flight: "Номер рейса",
  pln: "Бортовой номер ВС",
  plnType: "Тип ВС",
  from: "Аэродром взлета",
  fromLat: "Аэродром взлёта - долгота",
  fromLong: "Аэродром взлёта - широта",
  to: "Аэродром посадки",
  toLat: "Аэродром посадки - долгота",
  toLong: "Аэродром посадки - широта",
  timeFlight: "Время налёта",
  timeBlock: "Полётное время",
  timeNight: "Ночное лётное время",
  timeBiologicalNight: "Биологическая ночь",
  timeWork: "Рабочее время",
  type: "Тип налёта",
};

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
});

const Row = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const rowKeys = Object.keys(row);

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
        <TableCell className={classes.td} align="right">
          {row.dateFlight}
        </TableCell>
        <TableCell className={classes.td} align="right">
          {row.from}
        </TableCell>
        <TableCell className={classes.td} align="right">
          {row.to}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>              
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {rowKeys.map((key) => (
                    <TableRow key={key} className={classes.row}>
                      <TableCell
                        component="th"
                        variant="head"
                        className={classes.th}
                      >
                        {mapFlightParam[key]}
                      </TableCell>

                      <TableCell
                        variant="body"
                        className={classes.td}
                        align="right"
                      >
                        {row[key]}
                      </TableCell>
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
};

Row.propTypes = {
  row: PropTypes.object.isRequired
};

export default Row;
