import { getCurrentLocation } from './selectors';

describe('#getCurrentLocation', () => {
	const state = {
		entities: {
			locations: {
				currentId: 2,
				byId: {
					'1': { id: 1, name: 'One' },
					'2': { id: 2, name: 'Two' }
				}
			}
		}
	};

	it('returns the location with the current ID', () => {
		expect(getCurrentLocation(state)).toEqual({
			id: 2,
			name: 'Two'
		})
	});
})