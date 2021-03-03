import React from "react";
import { Button } from "@material-ui/core";

const NewButton = ({children, clickHandler}) => {
  return <Button onClick={clickHandler} variant="contained" color="primary">{children}</Button>;
};

export default NewButton;
