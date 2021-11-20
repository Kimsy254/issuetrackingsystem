import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuLink from "./MenuLink";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { ADD_ISSUE } from "../constants/ActionTypes";

const styles = {
  root: {
    width: "100%",
	
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "white"
  }
};

class Menu extends Component {
  static propTypes = {
    filter: PropTypes.string,
    classes: PropTypes.object,
    menuState: PropTypes.string
  };

  render() {
    return (
      <div className="menu">
        <AppBar position="static">
          <Toolbar>
            <Typography
              
              className={this.props.classes.flex}
            >
              ISSUES
            </Typography>
            <MenuLink menuItem={ADD_ISSUE} menuState={this.props.menuState} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
