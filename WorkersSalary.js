import React from 'react';



class WorkersSalary extends React.Component {
	constructor() {
		super();

		this.state = {
			workers: [
				{name: 'Viktor', surname: 'Blah', days: 2, salaryRate: 200},
				{name: 'Oleg', surname: 'Bluh', days: 5, salaryRate: 650},
				{name: 'Ibrahim', surname: 'Blih', days: 7, salaryRate: 400},
			],
		};
	}

	changeDays(index, event){
		this.state.workers[index].days = event.target.value;
		this.setState({
			workers: this.state.workers
		})
	}
	changeSalaryRate(index, event){
		this.state.workers[index].salaryRate = event.target.value;
		this.setState({
			workers: this.state.workers
		})
	}
	render() {
		const list = this.state.workers.map((item,index) => {
			return(
				<tr key = {index}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td><input value = {item.days} onChange = {this.changeDays.bind(this, index)}/></td>
					<td><input value = {item.salaryRate} onChange = {this.changeSalaryRate.bind(this, index)}/></td>
					<td>{item.days * item.salaryRate}</td>
				</tr>
			)
		})
		return (
			<div>
				<table className ="table  table-bordered col-sm-5">
					<tbody>
						<th>Name</th><th>Surname</th><th>Work days</th><th>Salary rate</th><th>All salary</th>
						{list}
					</tbody>
				</table>
			</div>
		)
	}
}
export default WorkersSalary;
