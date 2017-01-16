import { combineReducers } from 'redux';

import { FORECAST_RECEIVE } from '../forecasts/actions';

export function byId(state = {}, {type, payload} = {}) {
	switch (type) {
		case FORECAST_RECEIVE:
			return Object.assign({}, state, { [payload.city.id]: payload.city });
		default:
			return state;
	}
}

export function currentId(state = {}, {type, payload} = {}) {
	switch (type) {
		case FORECAST_RECEIVE:
			return payload.city.id;
		default:
			return state;
	}
}

export default combineReducers({
	byId,
	currentId
});