import React from 'react';
import { shallow } from 'enzyme';

import ForecastDay from './ForecastDay';

describe('ForecastDay', () => {
	const day = {
		dt: '1484481600',
		main: {
			temp: 1,
			temp_max: 1.1,
			temp_min: 0.9
		},
		weather: [
			{ description: 'very rainy', main: 'Rain' }
		]
	};
	const component = shallow(<ForecastDay day={day} />);

	it('shows the date', function () {
		expect(component.find('.forecast-day__date').text()).toBe('15/1/2017');
	});

	it('shows the main temperature', function () {
		expect(component.find('.forecast-day__main-temp').text()).toBe('1°C');
	});

	it('shows the weather type', function () {
		expect(component.find('.forecast-day__description').text().trim()).toContain('Rain');
	});

	it('shows the min temp', function () {
		expect(component.find('.forecast-day__min-temp').text().trim()).toContain('min. 0.9°C');
	});

	it('shows the max temp', function () {
		expect(component.find('.forecast-day__max-temp').text().trim()).toContain('max. 1.1°C');
	});
});