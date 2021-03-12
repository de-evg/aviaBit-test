import React from "react";
import PropTypes from 'prop-types'
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
  if (filter === undefined) {
    debugger;
  }
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
            {years.map((year, i) => (
              <MenuItem key={`${year}-${i}`} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Container>
  );
};

SimpleSelect.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  years: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  filter: state[NameSpace.FLIGHTS].filter,
  years: getYears(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter(filter) {
    dispatch(ActionCreator.changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSelect);
