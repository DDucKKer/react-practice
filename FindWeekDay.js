import React from 'react';


class FindWeekDay extends React.Component {
	constructor() {
		super();
		this.state = {
			day: 12,
			month: 0,
			year: 2020,
			weekDays: ['Monday', 'Tusday', 'Wednesday','Thirthday', 'Friday', 'Saturday','Sunday']
		}
		this.handleDay = this.handleDay.bind(this);
		this.handleMonth = this.handleMonth.bind(this);
		this.handleYear = this.handleYear.bind(this);
	}

	handleDay(event){
		this.setState({
			day: event.target.value
		});
	}
	handleMonth(event){
		this.setState({
			month:  event.target.value
		});
	}
	handleYear(event){
		this.setState({
			year:  event.target.value
		});
	}

	render() {
		const arrayDay = () => {
			const d = [];
			var days = new Date(this.state.year, this.state.month, 0);
			for(let i = 1; i <= days.getDate(); i++){
				d[i] = <option key = {i - 1} value = {i - 1}> {i} </option>;
			}
			return d;
		}

		const arrayMonthes = ['January', 'February', 'March','Apr', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'].map((item, index) => {
			return <option key = {index} value = {index + 1}> {item} </option>;
		});

		const arrayYear = () => {
			const a = [];
			for(let i = 1900; i <= 2050; i++){
				a[i-1900] = <option key = {i-1900}>{i}</option>;
			}
			return a;
		}
		let dayNum = new Date(this.state.year, this.state.month - 1, this.state.day).getDay();

		//console.log(this.state.weekDays[dayNum])
		return (
			<div>

				<h1> {this.state.weekDays[dayNum]} </h1>

				<select
					value = {this.state.day}
					onChange = {this.handleDay}
				>
					{arrayDay()}
				</select>
				<select
					value= {this.state.month}
					onChange = {this.handleMonth}
				>
					{arrayMonthes}
				</select>
				<select
					value= {this.state.year}
					onChange = {this.handleYear}
				>
					{arrayYear()}
				</select>
			</div>
		)
	}
}
export default FindWeekDay;
