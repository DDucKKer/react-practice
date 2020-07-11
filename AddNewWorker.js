import React from 'react';


class AddNewWorker extends React.Component {
	constructor() {
		super();
		this.state = {
			workers: [
				{name: 'Sam', surname: 'Jackson', age: 25, gender: 'man'},
				{name: 'Kane', surname: 'Lawson', age: 27, gender: 'woman'},
				{name: 'Lara', surname: 'Swifton', age: 24, gender: 'woman'}
			],
			newname: '',
			newsurname: '',
			newage: '',
			newgender:'Man',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handleSurname =this.handleSurname.bind(this);
		this.handleAge = this.handleAge.bind(this);
	}

	handleName(event){
		this.setState({
			newname: event.target.value
		})
	}

	handleSurname(event){
		this.setState({
			newsurname: event.target.value
		})
	}

	handleAge(event){
		this.setState({
			newage: event.target.value
		})
	}
	handleGender(event){
		this.setState({
			newgender: event.target.value
		})
	}
	handleSubmit(event) {
		this.state.workers.push({name: this.state.newname, surname: this.state.newsurname, age: this.state.newage, gender: this.state.newgender})
		this.setState({
			workers: this.state.workers,
			newname: '',
			newsurname: '',
			newage: '',
			newgender:'Man',
		});
		event.preventDefault();
	}
	render() {
		const list = this.state.workers.map((item, index) => {
			return(
				<tr key = {index}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td>{item.age}</td>
					<td>{item.gender}</td>
				</tr>
			);
		});

		return (
			<div>
				<table className = 'table'>
					<tbody>
						<tr><td>Name</td><td>Surname</td><td>Age</td><td>Gender</td></tr>
						{list}
					</tbody>
				</table><br/>

				<form onSubmit = {this.handleSubmit}>
					<p>Name:</p>
					<input
						value = {this.state.newname}
						onChange = {this.handleName}
					/><br/>
					<p>Surname:</p>
					<input
						value = {this.state.newsurname}
						onChange = {this.handleSurname}
					/><br/>
					<p>Age:</p>
					<input
						value = {this.state.newage}
						onChange = {this.handleAge}
					/><br/>
					<p>Gender:</p>
					<select
						value = {this.state.newgender}
						onChange = {this.handleGender.bind(this)}
					>
						<option>Men</option>
						<option>Woman</option>
					</select><br/>
					<input
						type = 'submit'
						value = 'Add'
					/>
				</form>
			</div>
		)
	}
}
export default AddNewWorker;
