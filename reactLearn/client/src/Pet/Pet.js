import React from 'react';

const printPet = (props) => {
	return (
		<div>
			<h3>I have a {props.name}! He is {props.age} now!</h3>
			<input type="text" onChange={props.changed}></input>
		</div>
	)
};

export default printPet;
