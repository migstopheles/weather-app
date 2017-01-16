import React, { Component } from 'react';

import LocationSearchContainer from './locations/containers/LocationSearchContainer';
import ForecastContainer from './forecasts/containers/ForecastContainer';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<LocationSearchContainer />
				<ForecastContainer />
			</div>
		);
	}
}

export default App;
