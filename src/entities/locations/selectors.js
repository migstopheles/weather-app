export function getCurrentLocation(state) {
	return state.entities.locations.byId[state.entities.locations.currentId];
}