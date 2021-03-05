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

const NextFlight = () => {
  const classes = useStyles();

  const rows = [
    createData("Дата рейса", 123),
    createData("Номер рейса", 123),
    createData("Тип воздушного судна", 123),
    createData("Бортовой номер судна", 123),
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

export default NextFlight;
