import { combineReducers } from 'redux';

import entities from '../entities/reducers';

export default function createReducer() {
	return combineReducers({
		entities
	});
}