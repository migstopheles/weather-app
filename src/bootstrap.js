import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import api from './api/api';
import configureStore from './store/store';

export default function bootstrap(state, view, mountNode) {
	const store = configureStore(state, api);
	ReactDOM.render(<Provider store={store}>{view}</Provider>, mountNode);
}