import { combineReducers } from 'redux';

import { FORECAST_RECEIVE } from './actions';

export function byCityId(state = {}, {type, payload} = {}) {
	switch (type) {
		case FORECAST_RECEIVE:
			return Object.assign({}, state, { [payload.city.id]: payload.list });
		default:
			return state;
	}
}

export default combineReducers({
	byCityId
});