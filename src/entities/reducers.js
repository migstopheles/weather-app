import { combineReducers } from 'redux';

import locations from './locations/reducers';
import forecasts from './forecasts/reducers';

export default combineReducers({
	locations,
	forecasts
});