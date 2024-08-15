import { combineReducers } from "redux";

import menuAction from "./menu";
import districtAction from "./district";

export default combineReducers({
  menu: menuAction,
  district: districtAction
});
