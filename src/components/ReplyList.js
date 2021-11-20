import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Paper} from "@material-ui/core";

class Replies extends Component {
  static propTypes = {
    submitted: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  };
  render() {
    return (
	<div>
        <Paper elevation={24}>
      <ListItem>
        <ListItemText
          inset={true}
          primary={`${this.props.user} said at ${new Date(
            this.props.submitted
          ).toLocaleString()}`}
          secondary={this.props.message}
        />
      </ListItem>
	  </Paper>
      </div>
    );
  }
}
export default Replies;
