import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import { Link } from "react-router-dom";
import axios from 'axios'

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
    marginTop: theme.spacing(3),
	backgroundColor: 'white'
  },
  formControl: {
    display: "grid",
    margin: theme.spacing()
  }
});


const BootstrapButton = withStyles({
  root: {
	
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


class IssueInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    nextId: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired
  };
  state = {
	creator: this.props.creator || "",
	recipient: this.props.recipient || "",
  message: this.props.message || "",
	creator_location: this.props.creator_location || "",
    id: this.props.nextId
  };

  handleCreatorChange = e => {
    this.setState({ creator: e.target.value });
  };
  
  handleRecipientChange = e => {
    this.setState({ recipient: e.target.value });
  };

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };
  
  handleCreator_LocationChange = e => {
    this.setState({ creator_location: e.target.value });
  };

  //handleButtonClick = () => {
     //axios.post('http://localhost:5000/issues', (this.state.id, this.state.creator, this.state.recipient, this.state.message, this.state.creator_location);
  //};
  
  
    	
    
  
  

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}  elevation={24}>
          <Typography
            variant="headline"
            component="h3"
            className={classes.formControl}
          >
            Raise an Issue
          </Typography>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel>Creator</InputLabel>
            <Input
              placeholder="Your Name"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              onChange={this.handleCreatorChange}
            />
          </FormControl>
		  
		  <FormControl fullWidth className={classes.formControl}>
            <InputLabel>Recipient</InputLabel>
            <Input
              multiline={true}
              placeholder="Recipient Name"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              onChange={this.handleRecipientChange}
            />
          </FormControl>
		  
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel>Message</InputLabel>
            <Input
              multiline={true}
              placeholder="Write your issues here"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              onChange={this.handleMessageChange}
            />
          </FormControl>
		  
		  <FormControl fullWidth className={classes.formControl}>
            <InputLabel>location</InputLabel>
            <Input
              multiline={true}
              placeholder="Your Location"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              onChange={this.handleCreator_LocationChange}
            />
          </FormControl>
		  
		  
          <BootstrapButton
            to="/issue/"
            component={Link}
            onClick={this.handleButtonClick}
            disabled={!(this.state.creator && this.state.recipient && this.state.message && this.state.creator_location )}
            className={classes.input}
			variant="contained"
			color="primary" 
			size="large"
			endIcon={<SendIcon>submit</SendIcon>}
          >
            Submit
          </BootstrapButton>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(IssueInput);
