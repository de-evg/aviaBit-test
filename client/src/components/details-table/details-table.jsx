import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  th: {
    border: "none",
    padding: "10px",
    color: "#000000",
    fontWeight: 700
  },
  td: {
    border: "none",
    padding: "10px",    
    color: "#676565",
    fontWeight: 400,
  },
  title: {
    marginBottom: "5px"
  }
});

const DetailsTable = ({rows, title}) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.title}
        variant="h6"
        color={"textSecondary"}
        id="tableTitle"
        component="h3"
      >
        {title}
      </Typography>
      <TableContainer component={Paper} style={{width: "100%"}}>
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
      </TableContainer>
    </>
  );
};

export default DetailsTable;
