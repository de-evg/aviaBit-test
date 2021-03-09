import React, { useState } from "react";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  FormControl,
  Select,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import { ActionCreator } from "../../store/action";
import { getYears } from "../../store/selectors";

const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: `space-between`,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: `#ffffff`,
  },
  select: {
    color: `black`,
    height: `20px`,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = ({ filter, setFilter, years }) => {
  const classes = useStyles();

  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  return (
    <Container style={{padding: "0"}}>
      <Grid container className={classes.grid}>
        <Typography component="p">Выберите год</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            className={classes.select}
            labelId="select-label"
            id="select-outlined"
            value={filter}
            defaultValue={filter}
            onChange={handleChange}
            label="Year"
          >
            {years.map((year) => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  year: state[NameSpace.STATISTIC].filter,
  years: getYears(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter(filter) {
    dispatch(ActionCreator.changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSelect);
