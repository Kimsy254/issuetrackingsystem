import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import IssueDetails from "../components/IssueDetails";

import * as IssueActions from "../actions";

const EditIssue = ({ issues, actions, currentIssue, match: { params } }) => {
  console.log("EditIssue props", params);
  return (
    <div>
      <Menu menuState={params.menuAction} />
      <IssueDetails
        editIssue={actions.editIssue}
        deleteIssue={actions.deleteIssue}
        closeIssue={actions.closeIssue}
        openIssue={actions.openIssue}
        replyIssue={actions.replyIssue}
        issue={issues.filter(t => t.id === Number(params.id))[0]}
      />
    </div>
  );
};

EditIssue.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditIssue);
