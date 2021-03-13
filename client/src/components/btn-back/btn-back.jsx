import React from "react";
import {useMediaQuery} from "@material-ui/core";
import {useHistory} from "react-router";
import {AppRoute} from "../../const";
import Btn from "../btn/btn";

const BtnBack = () => {
  const history = useHistory();
  const matches = useMediaQuery(`(min-width: 600px)`);

  const handleClick = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.MAIN);
    window.scrollTo(0, 0);
  };

  return (
    <Btn color="initial" clickHandler={handleClick} style={matches ? null : {width: "100%"}}>
      Назад
    </Btn>
  );
};

export default BtnBack;
