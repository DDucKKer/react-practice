import React from 'react';

import ReactDOM from 'react-dom';
import './App.css';



class App extends React.Component {
	constructor() {
		super();

		this.state = {
			test: [
				{question: 'dog, horse, hamster or cat?', answer: 'cat', variants: ['dog', 'horse', 'hamster', 'cat'], yourAnswer: '', showed: true},
				{question: 'play, read, run or sleep?', answer: 'play', variants: ['play', 'read', 'run', 'sleep'], yourAnswer: '', showed: false},
				{question: 'film, serial, walk or sex?', answer: 'sex', variants: ['film', 'serial', 'walk', 'sex'], yourAnswer: '', showed: false},
			],
		};
	}

	checkAnswer(index, event){
		this.state.test[index].yourAnswer = event.target.value;
		this.setState({
			test: this.state.test
		})
	}
	createAnswerByRadio(index, event){
		this.state.test[index].yourAnswer = event.target.value;
		this.setState({
			test: this.state.test
		})
	}
	prevAnswer(index){
		this.state.test[index].showed = !this.state.test[index].showed
		this.state.test[index - 1].showed = !this.state.test[index - 1].showed
		this.setState({
			test: this.state.test
		})
	}
	nextAnswer(index){
		this.state.test[index].showed = !this.state.test[index].showed
		this.state.test[index + 1].showed = !this.state.test[index + 1].showed
		this.setState({
			test: this.state.test
		})
	}
	checkAllAnswers(){
		const answers = this.state.test.map((item, index) => {
			return(
				<div key = {index}>
					<h3>{item.question} </h3>

					<h1 className = {(item.answer === item.yourAnswer) ? 'green' : 'red'}> Answer {index + 1} is {(item.answer === item.yourAnswer) ? 'true' : `false, true is ${item.answer}`}</h1>

				</div>
			)
		})
        ReactDOM.render(
          answers,
          document.getElementById('checking')
        );
		for(let i = 0; i < this.state.test.length; i++){
		this.state.test[i].showed = false
		}
		this.setState({
			test: this.state.test
		})
	}
	render() {
		const list = this.state.test.map((item, index) => {

			const dots = this.state.test.map((item, index) => {
				return(
					<div key = {index}>
						<input id = {item.answer + 0} name = {item.answer} type = "radio" value = {item.variants[0]} onChange = {this.createAnswerByRadio.bind(this, index)}/><label for = {item.answer + 0}>{item.variants[0]}</label><br/>
						<input id = {item.answer + 1} name = {item.answer} type = "radio" value = {item.variants[1]} onChange = {this.createAnswerByRadio.bind(this, index)}/><label for = {item.answer + 1}>{item.variants[1]}</label><br/>
						<input id = {item.answer + 2} name = {item.answer} type = "radio" value = {item.variants[2]} onChange = {this.createAnswerByRadio.bind(this, index)}/><label for = {item.answer + 2}>{item.variants[2]}</label><br/>
						<input id = {item.answer + 3} name = {item.answer} type = "radio" value = {item.variants[3]} onChange = {this.createAnswerByRadio.bind(this, index)}/><label for = {item.answer + 3}>{item.variants[3]}</label><br/>
					</div>
				)
			})

			if (item.showed) {
				return(
					<div key = {index}>

						<h3>{item.question} <br/>
						</h3>
							<div className = {(item.showed) ? 'show' : 'dontShow'}>

								{dots[index]}
							</div>
							{
								(index === 0 ) ?
									<div><button onClick = {this.nextAnswer.bind(this, index)}>Next</button></div>
								: (index !== this.state.test.length - 1) ?
									<div><button onClick = {this.prevAnswer.bind(this, index)}>Back</button><button onClick = {this.nextAnswer.bind(this, index)}>Next</button></div>
								:
									<div><button onClick = {this.prevAnswer.bind(this, index)}>Back</button><button onClick = {this.checkAllAnswers.bind(this)}>Check</button></div>
							}<br/>
						<br/>
					</div>
				)
			}

		})
		return (
			<div>
				{list}
				
				<div id = "checking"></div>
			</div>
		)
	}
}
export default App;
