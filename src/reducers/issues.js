import {
  ADD_ISSUE,
  DELETE_ISSUE,
  EDIT_ISSUE,
  CLOSE_ISSUE,
  PICK_ISSUE,
  REPLY_ISSUE,
  OPEN_ISSUE
} from "../constants/ActionTypes";



const axios = require('axios');

const initialState = {
  issues: [
    {
      creator: "Kim",
	  recipient: "Supervisor",
      message:
        "Testing Issue",
	  creator_location: "Nairobi",
      submitted: Date.now(),
      lastEdited: Date.now(),
      closed: false,
      replies: [],
      id: 0
    }
  ],
  currentIssue: {}
};

export default function issues(state = initialState, action) {
  console.log("here", state, action);
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        issues: state.issues.concat([
          {
            id:
              state.issues.reduce(
                (maxId, todo) => Math.max(todo.id, maxId),
                -1
              ) + 1,
            submitted: Date.now(),
            creator: action.creator,
			recipient: action.recipient,
            message: action.message,
			creator_location: action.creator_location,
            replies: []
          }
        ])
      };

    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter(issue => issue.id !== action.id)
      };

    case PICK_ISSUE:
      return {
        ...state,
        currentIssue: state.issues.filter(
          issue => issue.id === action.id
        )[0]
      };

    case EDIT_ISSUE:
      return {
        ...state,
        issues: state.issues.map(
          issue =>
            issue.id === action.id
              ? {
                  ...issue,
				  creator: action.creator,
				  recipient: action.recipient,
                  message: action.message,
                  creator_location: action.creator_location,
                  lastEdited: Date.now()
                }
              : issue
        )
      };

    case REPLY_ISSUE:
      return {
        ...state,
        issues: state.issues.map(
          issue =>
            issue.id === action.id
              ? { ...issue, replies: issue.replies.concat([action]) }
              : issue
        )
      };

    case CLOSE_ISSUE:
      return {
        ...state,
        issues: state.issues.map(
          issue =>
            issue.id === action.id ? { ...issue, closed: true } : issue
        )
      };
    case OPEN_ISSUE:
      return {
        ...state,
        issues: state.issues.map(
          issue =>
            issue.id === action.id ? { ...issue, closed: false } : issue
        )
      };

    default:
      return state;
  }
}
