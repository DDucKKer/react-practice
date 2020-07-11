import React from 'react';
import './App.css';


class ExchangeRates1 extends React.Component {
	constructor() {
		super();
		this.state = {
			currencies:[
				{name: 'ua', ua: 1, ru: 2.76, usa: 0.038},
				{name: 'ru', ua: 0.036, ru: 1, usa: 0.014},
				{name: 'usa', ua: 26.63, ru: 76.61, usa: 1},
			],
			value: 1,
			choice: {name: 'ua', ua: 1, ru: 2.76, usa: 0.038},
			seconCur: 'ua',
			answer: '',
		}

	}

	changeValue(event){
		this.setState({
			value: event.target.value,
		})
	}


	handleCurrency(event){
		const selectedIndex = event.target.options.selectedIndex;
		let num = event.target.options[selectedIndex].getAttribute('data-key');
		this.state.choice = this.state.currencies[num];
		this.setState({
			choice: this.state.choice,
		});
		console.log(this.state.choice);
	}

	handleRate(event){
		this.state.seconCur = event.target.value;
		this.setState({
			seconCur: this.state.seconCur,
		});
		console.log(this.state.seconCur);
	}
	letSumThisShit(){
		this.state.answer = this.state.value * this.state.choice[this.state.seconCur];
		this.setState({
			answer: this.state.answer
		})
	}
	render() {
		const list = this.state.currencies.map((item, index) => {
			return(
				<option key = {index} data-key = {index}>
					{item.name}
				</option>
			);
		});
		return (
			<div>
				<input
					value = {this.state.value}
					onChange = {this.changeValue.bind(this)}
				/>

				<p>From:</p>
				<select
					onChange = {this.handleCurrency.bind(this)}
				>
					{list}
				</select>

				<p>To:</p>
				<select
					onChange = {this.handleRate.bind(this)}
				>
					{list}
				</select>
				<br/>
				<button onClick = {this.letSumThisShit.bind(this)}>Click</button>
				<h1>{this.state.answer}</h1>
			</div>
		)
	}
}
export default ExchangeRates1;
