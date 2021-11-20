import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import IssueList from "../components/IssueList";
import Menu from "../components/Menu";
import * as IssueActions from "../actions";

const ViewIssues = ({
  issues,
  actions,
  currentIssue,
  match: { params }
}) => {
  console.log("ViewIssues props", params);
  return (
    <div>
      <Menu menuState={params.menuAction} />
      <IssueList issues={issues} />
    </div>
  );
};

ViewIssues.propTypes = {
  issues: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  issues: state.issues.issues,
  currentIssue: state.issues.currentIssue
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(IssueActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssues);
