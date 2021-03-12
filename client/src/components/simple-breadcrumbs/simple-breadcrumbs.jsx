import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import {useHistory} from "react-router";
import { AppRoute } from "../../const";

const SimpleBreadcrumbs = ({currentRoute}) => {
  const history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.MAIN)
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {currentRoute === AppRoute.DETAILS && (
        <Link color="initial" href="/" onClick={handleClick}>
          На главную
        </Link>
      )}
    </Breadcrumbs>
  );
};

export default SimpleBreadcrumbs;
