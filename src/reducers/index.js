import { combineReducers } from "redux";
import issues from "./issues";

const appReducer = combineReducers({
  issues
});

export default appReducer;
