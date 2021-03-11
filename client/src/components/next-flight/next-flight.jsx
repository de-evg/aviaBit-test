import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  TableBody,
  TableRow,
  TableCell,
  Table,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import { months } from "../../const";
import { ActionCreator } from "../../store/action";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    borderBottom: "1px solid rgba(16, 66, 195, 0.15)",
    paddingBottom: "24px",
  },
  card: {
    boxShadow: "none",
  },
  media: {
    maxWidth: "257px",
    marginBottom: "15px",
    backgroundSize: "contain",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "13px",
  },
  th: {
    border: "none",
    paddingLeft: 0,
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#000000",
    fontWeight: 700,
  },
  td: {
    border: "none",
    paddingRight: 0,
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#676565",
    fontWeight: 400,
  },
});

const createData = (name, data) => {
  return { name, data };
};

const NextFlight = ({
  nextFlight,
  isNextFlightFinded,
  searchNextFlight,
  isFlightsLoaded,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);

  const [flightData, setFlightData] = useState({
    date: "",
    flightNumber: "",
    plnType: "",
    pln: "",
  });
  const { date, flightNumber, plnType, pln } = flightData;

  useEffect(() => {
    if (!isNextFlightFinded && isFlightsLoaded) {
      searchNextFlight();
    }
  }, [isNextFlightFinded, searchNextFlight, isFlightsLoaded]);

  useEffect(() => {
    if (isNextFlightFinded) {
      setFlightData({
        date: `${nextFlight.dateFlight
          .toLocaleTimeString()
          .slice(0, 5)} ${nextFlight.dateFlight.getDate()} ${
          months[nextFlight.dateFlight.getMonth()]
        } ${nextFlight.dateFlight.getFullYear()}`,
        flightNumber: nextFlight.flight,
        plnType: nextFlight.plnType,
        pln: nextFlight.pln,
      });
    }
  }, [isNextFlightFinded, nextFlight, setFlightData]);

  const rows = [
    createData("Дата рейса", date),
    createData("Номер рейса", flightNumber),
    createData("Тип воздушного судна", plnType),
    createData("Бортовой номер судна", pln),
  ];

  return !isNextFlightFinded ? (
    <p>Загрузка...</p>
  ) : (
    <Grid
      item
      className={classes.grid}
      style={matches ? { borderBottom: "none" } : null}
    >
      <Card className={classes.card} align="center">
        <CardMedia
          component="img"
          alt="Plane type"
          maxWidth={matches ? 372 : 257}
          height={matches ? 104 : 89}
          image="./img/plane.png"
          title="Plane type"
          className={classes.media}
          style={matches ? { maxWidth: "372px" } : null}
        />
      </Card>
      <CardContent style={{ padding: 0 }}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={classes.row}>
                <TableCell component="th" variant="head" className={classes.th}>
                  {row.name}
                </TableCell>

                <TableCell variant="body" className={classes.td} align="right">
                  {row.data}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Grid>
  );
};

NextFlight.propTypes = {
  nextFlight: PropTypes.object.isRequired,
  searchNextFlight: PropTypes.func.isRequired,
  isFlightsLoaded: PropTypes.bool.isRequired,
  isNextFlightFinded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  nextFlight: state[NameSpace.FLIGHTS].nextFlight,
  isFlightsLoaded: state[NameSpace.FLIGHTS].isFlightsLoaded,
  isNextFlightFinded: state[NameSpace.FLIGHTS].isNextFlightFinded,
});

const mapDispatchToProps = (dispatch) => ({
  searchNextFlight() {
    dispatch(ActionCreator.setNextFlight());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NextFlight);
