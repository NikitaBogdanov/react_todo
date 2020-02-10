import { combineReducers } from 'redux';
import auth from "./auth/index";
import list from "./list/index";

export default combineReducers({
  auth,
  list
})
