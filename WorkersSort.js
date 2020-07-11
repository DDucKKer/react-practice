import React from 'react';
import './App.css';


class WorkersSort extends React.Component {
	constructor() {
		super();
		this.state = {
			workers: [
				{name: 'Коля', surname: 'Иванов', salary: 350},
				{name: 'Вася', surname: 'Петров', salary: 300},
				{name: 'Петя', surname: 'Сидоров', salary: 500},
			]
		};
	}

	sortBy(value) {
		function compare(a,b){
		  	if (a[value] > b[value]) return 1;
		  	if (a[value] === b[value]) return 0;
		  	if (a[value] < b[value]) return -1;
		}
		this.state.workers = this.state.workers.sort(compare);
		this.setState({
			workers: this.state.workers
		});
	}
	render() {

		const list = this.state.workers.map((item, index) => {
			return (
				<tr key = {index}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td>{item.salary}</td>
				</tr>
			)
		});

		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td><button onClick = {this.sortBy.bind(this, 'name')}>Name</button></td>
							<td><button onClick = {this.sortBy.bind(this, 'surname')}>Suname</button></td>
							<td><button onClick = {this.sortBy.bind(this, 'salary')}>Salary</button></td>
							{}
						</tr>
						{list}
					</tbody>
				</table>
			</div>
		)
	}
}
export default WorkersSort;
