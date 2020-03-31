import React from "react";
import "./Display.css";

const Display = props => {
	return (
		<div className="display">
			<p id="display">
				{props.display === "" ? 0 : props.display}
			</p>
			<button
				id="clear"
				className="clear"
				value="C"
				onClick={props.onClick}
			>
				C
			</button>
		</div>
	);
};

export default Display;
