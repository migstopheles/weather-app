import React from 'react';
import { shallow } from 'enzyme';

import LocationSearch from './LocationSearch';

describe('LocationSearch', () => {
	beforeEach(function () {
		this.callback = jest.fn();
		this.component = shallow(<LocationSearch onSearch={this.callback} />);
		this.btn = this.component.find('.location-search__btn');
		this.input = this.component.find('.location-search__input');
		this.component.setState({ value: 'New York City' });
	});

	it('calls the search callback with the input text when button is clicked', function () {
		this.btn.simulate('click');
		expect(this.callback).toBeCalledWith('New York City');
	});

	it('calls the search callback with the input text when the enter key is pressed', function () {
		this.input.simulate('keypress', { which: 13 });
		expect(this.callback).toBeCalledWith('New York City');
	});
});