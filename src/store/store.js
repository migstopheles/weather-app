import { applyMiddleware, compose, createStore } from 'redux';

import { thunkMiddleware } from './middleware';
import createReducer from './reducer';

export default function configureStore(intialState = {}, api) {
	// compose middleware for correct ordering
	const middleware = compose(
		applyMiddleware(thunkMiddleware(api)),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
	return createStore(createReducer(), intialState, middleware);
}