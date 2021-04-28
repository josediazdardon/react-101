import React, { Component } from 'react';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black'
		};
	}
	clickBtn = () => {
		this.setState({
			background: 'green'
		});
		console.log('clicked');
	};
	changeToActive = () => {
		if (this.state.background == 'green') {
			return 'active';
		} else {
			return '';
		}
	};
	render() {
		return (
			<div id="immutable">
				<div className={`box ${this.changeToActive()}`}></div>
				<div className="button" onClick={this.clickBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
