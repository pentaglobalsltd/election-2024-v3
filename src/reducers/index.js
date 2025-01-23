import { combineReducers } from 'redux';

import menuAction from './menu';
import districtAction from './district';
import constituencyAction from './constituency';

export default combineReducers({
  menu: menuAction,
  district: districtAction,
  constituency: constituencyAction,
});
