import React from 'react';
import './App.css';

function Number(props) {
	return (
		<div className="number" onClick={props.onClick}>
			{props.value}
		</div>
	)
}

export default Number;