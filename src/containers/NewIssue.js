import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import IssueInput from "../components/IssueInput";
import issueHelper from "../helpers/issueHelper";
import * as IssueActions from "../actions";


const NewIssue = ({ issues, actions, currentIssue, match: { params } }) => {
  console.log(actions);
  return (
    <div>
      <Menu
        completedCount={issues.filter(t => t.closed).length}
        activeCount={issues.filter(t => !t.closed).length}
		menuState="create-issue"
      />
      <IssueInput
        onSave={actions.addIssue}
        nextId={issueHelper.largestByObjKey(issues, "id") + 1}
      />
    </div>
  );
};

NewIssue.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewIssue);
