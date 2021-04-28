import React, { Component } from 'react';

export default class Button extends Component {
	constructor() {
		super();
		this.state = {
			hover: false
		};
	}
	toggleHover = () => {
		this.setState({
			hover: !this.state.hover
		});
	};
	render() {
		const styleButton = {
			width: '50%',
			border: '3px solid black',
			padding: '20px',
			fontSize: '15px',
			fontWeight: '900',
			textAlign: 'center',
			cursor: 'pointer',
			background: this.state.hover ? 'red' : 'white'
		};
		return (
			<div
				className={`button ${this.props.action}`}
				style={styleButton}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
				onClick={this.props.trigger}
			>
				{this.props.children}
			</div>
		);
	}
}
