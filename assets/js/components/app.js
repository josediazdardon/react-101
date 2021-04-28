import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter/Counter';
import Immutable from './Immutable/Immutable';
import BillsApp from './Bills/BillsApp';
import Advance from './Advance/Advance';
import ReactHooks from './Advance/ReactHooks';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'armando'
		};
	}
	render() {
		return (
			<div className="container">
				{/*<BillsApp />*/}
				{/*<Advance />*/}
				<ReactHooks />
				{/*<Immutable />*/}
				{/*<Counter status="auto" />*/}
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
