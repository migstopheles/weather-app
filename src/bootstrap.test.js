import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import bootstrap from './bootstrap';

it('renders', () => {
	const div = document.createElement('div');
	bootstrap({}, <App />, div);
});
