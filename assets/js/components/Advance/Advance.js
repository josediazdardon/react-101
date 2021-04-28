import React, { Component } from 'react';
import update from 'immutability-helper';

const AppContext = React.createContext();

class Provider extends Component {
	constructor() {
		super();
		this.state = {
			name: 'armando',
			clicked: false
		};
	}
	clickedButton = () => {
		this.setState({
			clicked: !this.state.clicked
		});
	};
	render() {
		return (
			<AppContext.Provider
				value={{ globalState: this.state, clickedButton: this.clickedButton }}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
export default class Advance extends Component {
	constructor() {
		super();
		this.state = {
			name: 'armando'
		};
	}
	render() {
		return (
			<Provider>
				<AppContext.Consumer>
					{context => <h1>{context.globalState.name}</h1>}
				</AppContext.Consumer>
				<div id="advanceFeatures">
					<GrandComp name={this.state.name} />
				</div>
			</Provider>
		);
	}
}
const GrandComp = props => {
	return (
		<div className="GrandComp">
			<FatherComp />
		</div>
	);
};
const FatherComp = props => {
	return (
		<div className="FatherComp">
			<ChildComp />
		</div>
	);
};
const ChildComp = props => {
	return (
		<AppContext.Consumer>
			{context => (
				<>
					<div
						className={`ChildComp ${
							context.globalState.clicked === true ? 'active' : ' '
						}`}
					>
						{context.globalState.name}
						<div className="button" onClick={context.clickedButton}>
							Save
						</div>
					</div>{' '}
				</>
			)}
		</AppContext.Consumer>
	);
};
