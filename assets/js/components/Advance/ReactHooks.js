import React, { Component, Fragment, useState } from 'react';
import update from 'immutability-helper';
import BoxComp from './BoxComp';

const ReactHooks = () => {
	const [state, setState] = useState({
		name: 'joe'
	});
	const clickedButton = () => {
		setState({
			name: 'billy'
		});
	};
	const displayBox = () => {
		if (state.name === 'joe') {
			return <div>Loading...</div>;
		} else {
			return <BoxComp />;
		}
	};
	return (
		<div id="HooksApp">
			<h1>working on hooks with {state.name}</h1>
			<div
				className="button"
				onClick={clickedButton}
				style={{
					background: 'blue',
					color: 'black'
				}}
			>
				save
			</div>
			{displayBox()}
		</div>
	);
};

export default ReactHooks;
