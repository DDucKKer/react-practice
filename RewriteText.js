import React from 'react';
import './App.css';


class RewriteText extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{text: 'Kolya', check: false},
				{text: 'Oleg', check: false},
				{text: 'Vasya', check: false},
			],
		};
	};
	handleInput(index){
		this.state.users[index].check = !this.state.users[index].check;
		this.setState({
			users: this.state.users
		})
	}
	handleBlur(index,event){
		this.state.users[index].check = !this.state.users[index].check;
		this.state.users[index].text = event.target.value;
		this.setState({
			users:this.state.users
		});

	}
	handleRename(index, event){
		this.state.users[index].text = event.target.value;
		this.setState({
			users: this.state.users
		});
	}

	render() {

		const list = this.state.users.map((item, index) => {

			return(
				<li key = {index}>
				{index + 1} -
					<span className = {!item.check ? 'active': 'not-active'} onClick = {this.handleInput.bind(this, index)}>{item.text}</span>

					<input
						className = {item.check ? 'active': 'not-active'}
						value = {item.text}
						onChange = {this.handleRename.bind(this, index)}
						onBlur = {this.handleBlur.bind(this, index)}
					/>
				</li>
			)
		});

		console.log(this.state);

		return (
			<div>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}
export default RewriteText;
