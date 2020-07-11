import React from 'react';


class AddToSelect extends React.Component {
	constructor() {
		super();
		this.state = {
			options: [],
			value: '',
			showtext: ''
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.showCity = this.showCity.bind(this);
	}

	handleInput(event){
		this.setState({
			value: event.target.value
		})
	}
	handleAdd(){
		this.state.options.push(this.state.value);
		this.setState({
			options: this.state.options,
			value: ''
		})
	}
	showCity(event){
		this.setState({
			showtext: event.target.value
		})
	}
	render() {
		const list = this.state.options.map((item, index) => {
			return (
				<option
					key = {index}
				>
					{item}
				</option>
			)
		});
		return (
			<div>
				<input
					value = {this.state.value}
					onChange = {this.handleInput}
				/>
				<button
					onClick = {this.handleAdd}
				>Add
				</button><br/>
				<select
					onChange = {this.showCity.bind(this)}
				>
					{list}
				</select>
				<h1>{this.state.showtext}</h1>
			</div>
		)
	}
}
export default AddToSelect;
