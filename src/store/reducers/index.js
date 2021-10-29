import { combineReducers } from 'redux';
import setInfosForms from './setInfos';

const allReducers = combineReducers({
  infosForms: setInfosForms,
});

export default allReducers;
