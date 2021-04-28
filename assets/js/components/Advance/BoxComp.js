import React, { Component, Fragment, useState, useEffect } from 'react';
import update from 'immutability-helper';

const BoxComp = () => {
	useEffect(() => {
		console.log('ComponentDidMount');
	}, []);
	return (
		<div
			className="box"
			style={{
				width: '100%',
				height: '200px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'blue'
			}}
		>
			blue box
		</div>
	);
};

export default BoxComp;
