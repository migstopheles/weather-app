import { connect } from 'react-redux';

import LocationSearch from '../components/LocationSearch/LocationSearch';
import { getForecast } from '../../../entities/forecasts/actions';

const mapDispatchToProps = (dispatch) => ({
	onSearch: (term) => {
		dispatch(getForecast(term));
	}
});

export default connect(null, mapDispatchToProps)(LocationSearch);