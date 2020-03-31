import React from "react";
import "./Banner.css";

class Banner extends React.Component {
	state = { visibility: "hidden" };

	handleClick = () => {
		let changeVisibility =
			this.state.visibility === "visible"
				? "hidden"
				: "visible";
		this.setState({ visibility: changeVisibility });
	};

	render() {
		return (
			<div className="banner" style={this.state}>
				<button
					className="info"
					onClick={this.handleClick}
					style={{ visibility: "visible" }}
				>
					?
				</button>
				<p>
					This project is part of the freeCodecamp
					Certification.
				</p>
				<p>Made by: alefuedev</p>
			</div>
		);
	}
}
export default Banner;
