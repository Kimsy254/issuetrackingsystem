import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";
import ReplyIcon from '@material-ui/icons/Reply';

const styles = theme => ({
  container: {
    width: "80%",
    margin: "auto"
  },
  input: {
    margin: theme.spacing()
  },
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3)
  },
  formControl: {
    display: "grid",
    margin: theme.spacing()
  }
});

class ReplyInput extends Component {
  static propTypes = {
    saveReply: PropTypes.func.isRequired,
    issueId: PropTypes.number.isRequired
  };
  state = {
	user: "",
    message: "",
    submitted: 0
  };

  handleUserChange = e => {
    const time = new Date();
    this.setState({ user: e.target.value, submitted: time.getTime() });
  };
  handleMessageChange = e => {
    const time = new Date();
    this.setState({ message: e.target.value, submitted: time.getTime() });
  };
  onSave = () => {
    this.props.saveReply({
      ...this.state,
      id: this.props.issueId
    });
    this.setState({
      message: "",
      user: "",
      submitted: 0
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}  elevation={24}>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel>Name</InputLabel>
          <Input
            placeholder="Your Name"
            className={classes.input}
            value={this.state.user}
            onChange={this.handleUserChange}
          />
        </FormControl>

        <FormControl fullWidth className={classes.formControl}>
          <InputLabel>Response</InputLabel>
          <Input
            multiline={true}
            placeholder="Explain"
            className={classes.input}
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
        </FormControl>
        <Button onClick={this.onSave}
		className={classes.input}
		endIcon={<ReplyIcon>reply</ReplyIcon>}
		variant="contained"
		color="primary">Reply</Button>
		</Paper>
      </div>
    );
  }
}
export default withStyles(styles)(ReplyInput);
