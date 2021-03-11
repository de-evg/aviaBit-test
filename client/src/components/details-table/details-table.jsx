import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
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
  media: {
    maxWidth: "257px",
    marginBottom: "15px",
    backgroundSize: "contain",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0",
  },
  th: {
    border: "none",
    paddingLeft: 0,
    paddingTop: "0px",
    paddingBottom: "0px",
    color: "#000000",
    fontWeight: 700,
  },
  td: {
    border: "none",
    paddingRight: 0,
    paddingTop: "0px",
    paddingBottom: "0px",
    color: "#676565",
    fontWeight: 400,
  },
});

const DetailsTable = ({ rows, title }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
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
    </>
  );
};

export default DetailsTable;
