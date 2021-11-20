import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';







const styles = theme => ({
  root: {
    width: "80%",
	margin: "auto"
	
	
  },
  
    
  
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(1),
	backgroundColor: '#ddd'
  },
  
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "30%",
    flexShrink: 1,
	color: "blue"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
    flexBasis: "25%",
    flexShrink: 1
  }
});

class ControlledAccordions extends Component {
  state = {
    expanded: null
  };
  static propTypes = {
    classes: PropTypes.object.isRequired,
    creator: PropTypes.string.isRequired,
	recipient: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
	creator_location: PropTypes.string.isRequired,
    lastReply: PropTypes.number.isRequired,
    replyCount: PropTypes.number.isRequired,
    submitted: PropTypes.number.isRequired,
    closed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
	issue: PropTypes.object.isRequired,
    editIssue: PropTypes.func.isRequired
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  
   state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: false });
  };s

 

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
	const {
      issue,
     
	  editIssue,
     
    } = this.props;

    return (
      <div className={classes.root}>
	  
        <Paper className={classes.paper}  elevation={24}>
        <Accordion
          expanded={expanded === this.props.id}
          onChange={this.handleChange(this.props.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.secondaryHeading}>
              ID: {this.props.id}
			  
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Creator: {this.props.creator}
            </Typography>
			<Typography className={classes.secondaryHeading}>
              Recipient: {this.props.recipient}
            </Typography>
			<Typography className={classes.secondaryHeading}>
              Location: {this.props.creator_location}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Date Created:{" "}
              {new Date(this.props.submitted).toLocaleString()}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Status: {this.props.closed ? "Closed" : "Open"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <div className={classes.column}>
              <Typography>{this.props.message}</Typography>
            </div>
          </AccordionDetails>
          <AccordionActions>
            <div className={classes.column}>
              {this.props.lastReply ? (
                <Typography>
                  Last Reply: {new Date(this.props.lastReply).toLocaleString()}
                </Typography>
              ) : (
                <div />
              )}
            </div>
			
            <Button
              size="medium"
              color="primary"
			  variant="outlined"
			  endIcon={<ArrowForwardIcon />}
              to={`/issues/${this.props.id}`}
              component={Link}
            >
              Action
            </Button>
			  <Button
              className="actions"
              onClick={() => editIssue(issue.id)}
              variant="outlined"
              color="primary"
              size="small"
			  
            >
              edit
            </Button>
          </AccordionActions>
        </Accordion>
		</Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ControlledAccordions);
