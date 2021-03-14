import React from "react";
import { Typography, Avatar, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    marginBottom: "13px",
  },
  userName: {
    color: "#000000",
    fontWeight: 700,
  },
  userMail: {
    color: "#676565",
    fontWeight: 400,
  },
});

const User = () => {
  const classes = useStyles();
  const matches = useMediaQuery(`(min-width: 600px)`);
  const retina = useMediaQuery(`(min-resolution: 192dpi)`);

  return (
    <Grid
      container
      spacing={5}
      wrap="nowrap"
      alignContent="space-between"
      item
      className={classes.root}
      style={matches ? {margin: "29px 0"} : null}
    >
      <Grid item>
        <Avatar
          alt="Sheldon Cooper"
          style={{ width: "60px", height: "60px" }}
          src={retina ? "/img/avatar@2x.jpg" : "/img/avatar.jpg"}
        />
      </Grid>
      <Grid container alignItems="center" item>
        <Grid item>
          <Typography className={classes.userName} variant="body1">
            Шелдон Купер
          </Typography>
          <Typography className={classes.userMail} variant="body2">
            sheldon.cooper@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default User;
