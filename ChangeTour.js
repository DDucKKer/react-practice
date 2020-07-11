import React from 'react';
import './App.css';


class ChangeTour extends React.Component {
	constructor() {
		super();
		this.state = {
			tours: [
				{start: 'Kyiv', finish: 'Odessa', cost: 500, show:true},
				{start: 'Lviv', finish: 'Odessa', cost: 650, show:false},
				{start: 'Kharkiv', finish: 'Odessa', cost: 450, show:false},
			],
			value: ''
		};
	}

	handleChange(index){
		for(let i = 0; i < this.state.tours.length; i++){
			if(index === i){
				this.state.tours[index].show = true
			}
			else{
				this.state.tours[i].show = false
			}
			console.log (i, this.state.tours[i].show);
		}
		this.setState({
			tours: this.state.tours
		});
	}
	render() {

		const list = this.state.tours.map((item, index) => {
			return (
				<tr key = {index}>
					<td>
						{item.start}
					</td>
					<td>
						{item.finish}
					</td>
					<td>
						{item.cost}
					</td>
					<td>
						<input
						type="radio"
						onChange = {this.handleChange.bind(this, index)}/>
					</td>
				</tr>
			)
		});
		let text;
		for (let k in this.state.tours){
			if (this.state.tours[k].show){
				text = <p>From: {this.state.tours[k].start}<br/> To: {this.state.tours[k].finish}<br/> Cost: {this.state.tours[k].cost}</p>;
			}
		}

		return (
			<div>
				<table>
					<tbody>
						<tr><td>S.P.</td><td>F.P.</td><td>Cost</td></tr>
						{list}
					</tbody>
				</table><br/>
				{text}
			</div>
		)
	}
}
export default ChangeTour;
