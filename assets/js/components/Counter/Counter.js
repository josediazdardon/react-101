import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			status: 'manual',
			currentNumber: 0
		};
	}
	componentDidMount() {
		if (this.props.status == 'auto') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.counterRun();
				}
			);
		}
	}

	clickedAdd = () => {
		this.setState({
			currentNumber: this.state.currentNumber + 1
		});
	};
	clickedMinus = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};
	/*counterRun = () => {
		setInterval(() => {
			this.setState({
				currentNumber: this.state.currentNumber + 1
			});
		}, 1000);
	};*/
	render() {
		const styleCounter = {
			width: '100%',
			maxWidth: '400px',
			margin: '0 auto'
		};
		const styleNumber = {
			border: '3px solid black',
			padding: '20px',
			fontSize: '15px',
			fontWeight: '900',
			textAlign: 'center'
		};
		const styleButtons = {
			display: this.props.status == 'auto' ? 'none' : 'flex'
		};
		const styleButton = {
			width: '50%',
			border: '3px solid black',
			padding: '20px',
			fontSize: '15px',
			fontWeight: '900',
			textAlign: 'center',
			cursor: 'pointer'
		};
		return (
			<div id="counter" style={styleCounter}>
				<div className="number" style={styleNumber}>
					{this.state.currentNumber}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button action="minus" trigger={this.clickedMinus}>
						-
					</Button>
					<Button action="plus" trigger={this.clickedAdd}>
						+
					</Button>
				</div>
			</div>
		);
	}
}
