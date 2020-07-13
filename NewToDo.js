/* Реализуйте TODO-лист (чеклист). В нем должен быть список задач, которые хочет сделать
пользователь. Задачу можно добавить, удалить, поредактировать. Кроме того, рядом с каждой
задачей должен быть чекбокс, с помощью которого можно отметить эту задачу сделанной.
Сделанная задача не удаляется из списка, а становится перечеркнутой.*/

/*Implement a TODO list (checklist). It should have a list of tasks that the user wants
to do. The task can be added, deleted, edited. In addition, next to each task there should
be a checkbox with which you can mark this task done. The done task is not deleted
from the list, but becomes crossed out.*/
import React from 'react';
import './App.css';


class ToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: [
				{text: 'Eat', time: '22:00:00 12.6.2020', rewrite: false, done: true},
				{text: 'Sleep', time: '22:00:00 12.6.2020', rewrite: false, done: false},
				{text: 'Watch films', time: '22:00:00 12.6.2020', rewrite: true, done: false},
			],
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
		this.state.todo.push({text: this.state.value, time: date.getHours() + ':' + date.getMinutes()+ ':' + date.getSeconds() + '  ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(), rewrite: false, done: false});
		this.setState({
			todo: this.state.todo,
			value: ''
		});
	}
	deleteToDo(index){
		this.state.todo.splice(index, 1);
		this.setState({
			todo: this.state.todo
		})
	}
	updateToDo(index){
		this.state.todo[index].rewrite = false;
		this.setState({
			todo: this.state.todo
		})
	}
	todoDone(index){
		this.state.todo[index].done = !this.state.todo[index].done;
		this.setState({
			todo: this.state.todo
		})
	}
	showInput(index){
		this.state.todo[index].rewrite = true;
		this.setState({
			todo: this.state.todo
		})
	}
	rewriteToDo(index, event){
		this.state.todo[index].text = event.target.value;
		this.setState({
			todo: this.state.todo
		})
	}


	render() {

		const list = this.state.todo.map((item, index) => {
			return (
				<div key = {index}>
					<div>
						<input type = "checkbox" onChange = {this.todoDone.bind(this, index)} checked = {item.done}/>
						<span className = {(!item.rewrite) ? 'active' : 'not-active'}  style = { {textDecoration: (item.done) ? 'line-through' : 'none'}} onClick = {this.showInput.bind(this, index)}>
							{'\t' + item.text + ' '}
						</span>
						<span className = {(item.rewrite) ? 'active' : 'not-active'}>
							<input value = {item.text} onChange = {this.rewriteToDo.bind(this, index)}/>
						</span>
						<span>
							<button
								className = {(!item.rewrite) ? 'active deleteButton' : 'not-active deleteButton'}
								onClick = {this.deleteToDo.bind(this, index)}
							>
								Delete
							</button>

							<button
								className = {(item.rewrite) ? 'active deleteButton' : 'not-active deleteButton'}
								onClick = {this.updateToDo.bind(this, index)}
							>
								Update
							</button>
						</span>
					</div>
				</div>
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
export default ToDo;
