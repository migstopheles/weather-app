export function thunkMiddleware(api) {
	return ({ dispatch, getState }) => (next) => (action) => {
		if (typeof action === 'function') {
			return action(dispatch, getState, api);
		}

		return next(action);
	};
}