import React from "react";
import Banner from "./Banner";
import Display from "./Display";

import "./App.css";
import "./Button.css";

class App extends React.Component {
	state = { display: "", memory: "", result: "0" };

	number = e => {
		let value = e.target.value;
		this.setState(prevState => ({
			display: prevState.display + value
		}));
	};

	zero = e => {
		let value = e.target.value;
		if (value === "0" && this.state.display[0] !== "0") {
			this.setState(prevState => ({
				display: prevState.display + value
			}));
		}
	};

	operator = e => {
		let value = e.target.value;
		let display = this.state.display;
		this.setState(prevState => ({
			memory: prevState.memory + display + value,
			display: ""
		}));
	};

	decimal = e => {
		let display = this.state.display;
		let value = e.target.value;
		if (display.includes(".") === false) {
			this.setState(prevState => ({
				display: prevState.display + value
			}));
		}
	};

	equals = e => {
		let result = this.state.memory + this.state.display;
		result = eval(result);
		this.setState({
			display: result,
			memory: "",
			result: ""
		});
	};

	clear = () => {
		this.setState({ display: "", memory: "", result: "" });
	};

	render() {
		return (
			<div className="app">
				<Banner />
				<div className="calculator">
					<Display
						display={this.state.display}
						onClick={this.clear}
					/>
					<div className="buttons">
						<button
							id="seven"
							className="seven"
							value="7"
							onClick={this.number}
						>
							7
						</button>
						<button
							id="eight"
							className="eight"
							value="8"
							onClick={this.number}
						>
							8
						</button>
						<button
							id="nine"
							className="nine"
							value="9"
							onClick={this.number}
						>
							9
						</button>
						<button
							id="multiply"
							className="multiply"
							value="*"
							onClick={this.operator}
						>
							*
						</button>
						<button
							id="four"
							className="four"
							value="4"
							onClick={this.number}
						>
							4
						</button>
						<button
							id="five"
							className="five"
							value="5"
							onClick={this.number}
						>
							5
						</button>
						<button
							id="six"
							className="six"
							value="6"
							onClick={this.number}
						>
							6
						</button>
						<button
							id="subtract"
							className="minus"
							value="-"
							onClick={this.operator}
						>
							-
						</button>
						<button
							id="one"
							className="one"
							value="1"
							onClick={this.number}
						>
							1
						</button>
						<button
							id="two"
							className="two"
							value="2"
							onClick={this.number}
						>
							2
						</button>
						<button
							id="three"
							className="three"
							value="3"
							onClick={this.number}
						>
							3
						</button>
						<button
							id="add"
							className="add"
							value="+"
							onClick={this.operator}
						>
							+
						</button>
						<button
							id="zero"
							className=".zero"
							value="0"
							onClick={this.zero}
						>
							0
						</button>
						<button
							id="decimal"
							className="decimal"
							value="."
							onClick={this.decimal}
						>
							.
						</button>
						<button
							id="divide"
							className="divide"
							value="/"
							onClick={this.operator}
						>
							/
						</button>
						<button
							id="equals"
							className="equals"
							value="="
							onClick={this.equals}
						>
							=
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
