import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import * as IssueActions from "../actions";

const NoMatch = ({ issues, actions, currentIssue, match: { params } }) => {
  console.log("NoMatch props", params);
  return (
    <div>
      <Menu
        completedCount={issues.filter(t => t.closed).length}
        activeCount={issues.filter(t => !t.closed).length}
        menuState={params.menuAction}
      />
      <div>404 - Not Found</div>
    </div>
  );
};

NoMatch.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NoMatch);
