import React from 'react';

import './LocationSearch.css';

export default class LocationSearch extends React.Component {
	constructor() {
		super();
		this.state = { value: '' };
	}

	inputHandler(e) {
		this.setState({ value: e.target.value });
	}

	buttonHandler(e) {
		this.props.onSearch(this.state.value);
	}

	keyHandler(e) {
		// enter button
		if (e.which === 13) {
			this.buttonHandler();
		}
	}

	render() {
		const buttonHandler = this.buttonHandler.bind(this);
		const inputHandler = this.inputHandler.bind(this);
		const keyHandler = this.keyHandler.bind(this);

		return (
			<div className="location-search">
				<input className="location-search__input" value={this.state.value} type="text" id="locationsearch" onChange={inputHandler} onKeyPress={keyHandler} />
				<button className="location-search__btn" onClick={buttonHandler}>Go</button>
			</div>
		);
	}
}