import React, { Component } from "react";
import PropTypes from "prop-types";
import IssuePanel from "./IssuePanel";
import issueHelper from "../helpers/issueHelper";

export default class IssueList extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired
  };

  render() {
    const { issues } = this.props;

    return (
      <div className="issue-list">
        {issues.map(issue => {
          const latestReplyInMS = issueHelper.largestByObjKey(
            issue.replies,
            "submitted"
          );

          return (
            <IssuePanel
              key={issue.id}
              creator={issue.creator}
			  recipient={issue.recipient}
              message={issue.message}
			  creator_location={issue.creator_location}
              replyCount={issue.replies.length}
              submitted={issue.submitted}
              id={issue.id}
              closed={!!issue.closed}
              lastReply={latestReplyInMS}
            />
          );
        })}
      </div>
    );
  }
}
