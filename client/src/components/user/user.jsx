import React from "react";
import { Typography, Avatar, Grid } from "@material-ui/core";

const User = () => {
  return (
    <Grid
      container
      spacing={5}
      wrap="nowrap"
      alignContent="space-between"
      item
      bgcolor="primary.main"
    >
      <Grid item>
        <Avatar
          alt="Sheldon Cooper"
          style={{ width: "60px", height: "60px" }}
          src="./img/avatar.jpg"
        />
      </Grid>
      <Grid container alignItems="center" item>
        <Grid item>
          <Typography variant="body1">Шелдон Купер</Typography>
          <Typography variant="body3">sheldon.cooper@gmail.com</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default User;
