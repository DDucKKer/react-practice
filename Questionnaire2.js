import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
	constructor() {
		super();

		this.state = {
			test: [
				{question: 'dog or cat?', answer: 'cat', yourAnswer: '', showed: 'false'},
				{question: 'play or sleep?', answer: 'play', yourAnswer: '', showed: 'false'},
				{question: 'film or sex?', answer: 'sex', yourAnswer: '', showed: 'false'},
			],
		};
	}

	checkAnswer(index, event){
		this.state.test[index].yourAnswer = event.target.value;
		this.setState({
			test: this.state.test
		})
	}

	checkAllnswers(){
		for(let i = 0; i < this.state.test.length; i++){
			this.state.test[i].showed = !this.state.test[i].showed
		}
		this.setState({
			test: this.state.test
		});
	}
	render() {
		const list = this.state.test.map((item,index) => {
			return(
				<div key = {index}>
					<h3>{item.question} <br/>
						<div className = {(item.showed) ? 'show' : 'dontShow'}>
							<input  onChange = {this.checkAnswer.bind(this, index)}/>
						</div>
						<div className = {(!item.showed) ? 'show' : 'dontShow'}>
							<h1 className = {(item.answer === item.yourAnswer) ? 'green' : 'red'}> Answer {index + 1} is {(item.answer === item.yourAnswer) ? 'true' : `false, true is ${item.answer}`}</h1>
						</div>
					</h3>
					<br/>
				</div>
			)
		})
		return (
			<div>
				{list}
				<button onClick = {this.checkAllnswers.bind(this)}>Check</button>
			</div>
		)
	}
}
export default App;
