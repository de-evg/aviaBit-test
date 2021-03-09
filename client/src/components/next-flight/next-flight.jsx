import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import {months} from "../../const";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    borderBottom: "1px solid rgba(16, 66, 195, 0.15)",
    paddingBottom: "24px",
  },
  card: {
    boxShadow: "none",
  },
  plane: {
    marginBottom: "15px",
  },
  row: {
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

const NextFlight = ({ nextFlight }) => {
  const classes = useStyles();

  let date = "";
  let flightNumber = "";
  let plnType = "";
  let pln = "";
  if (Object.keys(nextFlight).length) {
    date = `${nextFlight.dateFlight.toLocaleTimeString().slice(0, 5)} ${nextFlight.dateFlight.getDate()} ${months[nextFlight.dateFlight.getMonth()]} ${nextFlight.dateFlight.getFullYear()}`;
    flightNumber = nextFlight.flight;
    plnType = nextFlight.plnType;
    pln = nextFlight.pln;
  }

  const rows = [
    createData("Дата рейса", date),
    createData("Номер рейса", flightNumber),
    createData("Тип воздушного судна", plnType),
    createData("Бортовой номер судна", pln),
  ];

  return (
    <Grid item className={classes.grid}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Plane type"
          width="257"
          height="89"
          image="./img/plane.png"
          title="Plane type"
          className={classes.plane}
        />
      </Card>
      <CardContent style={{ padding: 0 }}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={classes.row}>
                <Grid container justify="space-between">
                  <TableCell
                    component="th"
                    variant="head"
                    className={classes.th}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    variant="body"
                    className={classes.td}
                    align="right"
                  >
                    {row.data}
                  </TableCell>
                </Grid>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  nextFlight: state[NameSpace.FLIGHTS].nextFlight,
});

export default connect(mapStateToProps)(NextFlight);
