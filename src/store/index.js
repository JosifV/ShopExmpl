import { combineReducers } from "redux";
import authReducer from "./authReducer";
import Reducer from "./Reducer";

export default combineReducers({
  auth: authReducer,
  redcr: Reducer
});
