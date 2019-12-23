import { combineReducers } from 'redux';
import counterApp from './counter/index';
import auth from "./auth/index";

export default combineReducers({
  counterApp,
  auth
})
