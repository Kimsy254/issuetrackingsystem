import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
  },
  actions: {
    marginLeft: "25px"
  }
});

class IssueDetails extends Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    editIssue: PropTypes.func.isRequired,
    deleteIssue: PropTypes.func.isRequired,
    closeIssue: PropTypes.func.isRequired,
    replyIssue: PropTypes.func.isRequired,
    openIssue: PropTypes.func.isRequired
  }
  
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  render() {
    const {
      issue,
      closeIssue,
      openIssue,
	  editIssue,
      deleteIssue,
      replyIssue,
      classes
    } = this.props;
    const getReplies = issue =>
      issue.replies
        .sort((a, b) => {
          // sort in descending order by time
          if (a.submitted < b.submitted) {
            return 1;
          }
          if (a.submitted > b.submitted) {
            return -1;
          }
          return 0;
        })
        .map((reply, i) => {
          return (
            <ReplyList
              user={reply.user}
              message={reply.message}
              submitted={reply.submitted}
              key={i}
            />
          );
        });
    return (
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="headline" component="h4">
            {issue.closed ? "CLOSED - " : ""}
           Issue ID: {issue.id}
          </Typography>
          <Typography>{issue.message}</Typography>
          {issue.closed ? (
            <Button
              className="actions"
              onClick={() => openIssue(issue.id)}
              variant="outlined"
              color="primary"
              size="small"
			  startIcon={<CheckCircleOutlineIcon />}
            >
              Open
            </Button>
          ) : (
            <Button
              className="actions"
              onClick={() => closeIssue(issue.id)}
              variant="outlined"
              color="secondary"
              size="small"
			  startIcon={<CloseIcon />}
            >
              Close
            </Button>
          )}
          <Button
            to="/issues/"
            component={Link}
            style={{
              marginLeft: "80%"
            }}
            onClick={() => deleteIssue(issue.id)}
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Paper>
        {issue.closed ? (
          ""
        ) : (
          <ReplyInput issueId={issue.id} saveReply={replyIssue} />
        )}

        <List dense={true}>{getReplies(issue)}</List>
      </div>
    );
  }
}

export default withStyles(styles)(IssueDetails);
