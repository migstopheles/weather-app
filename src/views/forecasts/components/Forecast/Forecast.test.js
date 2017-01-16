import React from 'react';
import { shallow } from 'enzyme';

import Forecast from './Forecast';

describe('Forecast', () => {
	const location = {
		name: 'York',
		country: 'GB'
	};

	const forecast = [{
		dt: '1484481600',
		main: {
			temp: 1,
			temp_max: 1.1,
			temp_min: 0.9
		},
		weather: [
			{ description: 'very rainy', main: 'Rain' }
		]
	}];
	const component = shallow(<Forecast location={location} forecast={forecast} />);

	it('shows the title', function () {
		expect(component.find('.forecast__title').text()).toBe('Showing 1 day forecast for York, GB');
	});

	it('shows the list of daily forecasts', function () {
		expect(component.find('.forecast__item').length).toBe(1);
	});

	it('shows the empty state', function () {
		const emptyComponent = shallow(<Forecast forecast={[]} />);
		expect(emptyComponent.find('.forecast').text()).toBe('No forecast data to show, please choose a location');
	});
});