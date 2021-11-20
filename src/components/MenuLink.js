import React from "react";
import { Link } from "react-router-dom";
import { ADD_ISSUE } from "../constants/ActionTypes";
import Button from "@material-ui/core/Button";
import BugReportIcon from '@material-ui/icons/BugReport';
import ViewListIcon from '@material-ui/icons/ViewList';

const MenuLink = ({ menuItem, menuState, children }) => {
  if (menuState !== ADD_ISSUE) {
    return (
      <Link to={`/issues/${menuItem}`}>
        <Button variant="contained" color="raised" 
		startIcon={<BugReportIcon />}
		
		>
          Create Issue
        </Button>
      </Link>
    );
  } else {
    return (
      <Link to={"/issues/"}>
        <Button variant="contained" color="raised" 
		startIcon={<ViewListIcon />}>
          View Issues
        </Button>
      </Link>
    );
  }
};

export default MenuLink;
