import * as types from "../constants/ActionTypes";

export const addIssue = (id, creator, recipient, message, creator_location) => ({
  type: types.ADD_ISSUE,
  creator,
  recipient,
  message,
  creator_location,
  id
});
export const deleteIssue = id => ({ type: types.DELETE_ISSUE, id });
export const editIssue = (id, creator, recipient, message, creator_location) => ({
  type: types.EDIT_ISSUE,
  id,
  creator,
  recipient,
  message,
  creator_location,
});
export const closeIssue = id => ({ type: types.CLOSE_ISSUE, id });
export const openIssue = id => ({ type: types.OPEN_ISSUE, id });
export const replyIssue = ({ id, message, user, submitted }) => ({
  type: types.REPLY_ISSUE,
  id,
  message,
  user,
  submitted
});
