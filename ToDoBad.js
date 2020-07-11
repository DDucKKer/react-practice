import React from 'react';
import './App.css';


class ToDoBad extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: [],
			time: [],
			value: ''
		};
	}

	handleValue(event){
		this.setState({
			value: event.target.value
		});
	}
	makeToDo(){
		let date = new Date();
		if(this.state.value === '') return alert('Input text');
		this.state.todo.push(this.state.value);
		this.state.time.push(date.getHours() + ':' + date.getMinutes()+ ':' + date.getSeconds() + '  ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear());
		this.setState({
			todo: this.state.todo,
			time:  this.state.time,
			value: ''
		});
	}
	deleteToDo(index){
		this.state.todo.splice(index, 1);
			this.state.time.splice(index, 1);
		this.setState({
			todo: this.state.todo
		})
	}
	render() {

		const list = this.state.todo.map((item, index) => {
			return (
				<li key = {index}>
					{item + ' '}
					({this.state.time[index]})
					<span>
						<button
						onClick = {this.deleteToDo.bind(this, index)}
						>
							Delete
						</button>

					</span>

				</li>
			)
		});

		return (
			<div>
			<h1>ToDo</h1><br/>
				<textarea
					value = {this.state.value}
					onChange = {this.handleValue.bind(this)}
				>
				</textarea><br/>
				<button
					onClick = {this.makeToDo.bind(this)}
				>
					Enter
				</button>
				<ul>
					{list}
				</ul><br/>
			</div>
		)
	}
}
export default ToDoBad;
