import { connect } from 'react-redux';

import { getCurrentLocation } from '../../../entities/locations/selectors';
import { getCurrentDailyForecast } from '../../../entities/forecasts/selectors';

import Forecast from '../components/Forecast/Forecast';

const mapStateToProps = (state) => ({
	forecast: getCurrentDailyForecast(state),
	location: getCurrentLocation(state)
});

export default connect(mapStateToProps)(Forecast);