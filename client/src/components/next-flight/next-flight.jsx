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

const NextFlight = () => {
  const createData = (name, data) => {
    return { name, data };
  };

  const rows = [
    createData("Дата рейса", 123),
    createData("Номер рейса", 123),
    createData("Тип воздушного судна", 123),
    createData("Бортовой номер судна", 123),
  ];

  return (
    <Grid
      item
      style={{
        borderBottom: "1px solid rgba(16, 66, 195, 0.15)",
        width: "100%",
      }}
    >
      <Card style={{ boxShadow: "none" }}>
        <CardMedia
          component="img"
          alt="Plane type"
          width="257"
          height="89"
          image="./img/plane.png"
          title="Plane type"
        />
      </Card>
      <CardContent style={{ padding: 0 }}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <Grid container justify="space-between">
                  <TableCell
                    component="th"
                    variant="head"
                    style={{
                      border: "none",
                      paddingLeft: 0,
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      color: "#000000",
                      fontWeight: 700,
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    variant="body"
                    style={{
                      border: "none",
                      paddingRight: 0,
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      color: "#676565",
                      fontWeight: 400,
                    }}
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
