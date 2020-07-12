import React from 'react';

import ReactDOM from 'react-dom';
import './App.css';



class App extends React.Component {
	constructor() {
		super();

		this.state = {
			test: [
				{question: 'dog, horse, hamster or cat?', answer: ['dog', 'cat'], variants: ['dog', 'horse', 'hamster', 'cat'], yourAnswer: [], showed: true},
				{question: 'play, read, run or sleep?', answer: ['play', 'sleep'], variants: ['play', 'read', 'run', 'sleep'], yourAnswer: [], showed: false},
				{question: 'film, serial, walk or sex?', answer: ['film', 'sex'], variants: ['film', 'serial', 'walk', 'sex'], yourAnswer: [], showed: false},
			],
		};
	}

	createAnswerByRadio(index, id, event){
		if(event.target.checked){
			this.state.test[index].yourAnswer[id] = event.target.value;
		} else {
			this.state.test[index].yourAnswer.splice(id, 1)
		}
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
			 console.log((item.answer.filter(i=>item.yourAnswer.indexOf(i)<0).length === 0) ? true : false)
			return(
				<div key = {index}>
					<h3>{item.question} </h3>

					<h1 className = {(item.answer.filter(i=>item.yourAnswer.indexOf(i)<0).concat(item.yourAnswer.filter(i=>!item.answer.includes(i))).length === 0) ? 'green' : 'red'}> Answer {index + 1} is {(item.answer.filter(i=>item.yourAnswer.indexOf(i)<0).concat(item.yourAnswer.filter(i=>!item.answer.includes(i))).length === 0) ? 'true' : `false, true is ${item.answer}`}</h1>

				</div>
			)
		})
        ReactDOM.render(
          answers,
          document.getElementById('checking')
        );
		for(let i = 0; i < this.state.test.length; i++){
			this.state.test[i].showed = false
			console.log(this.state.test[i].yourAnswer)
		}
		this.setState({
			test: this.state.test
		})
	}
	render() {
		const list = this.state.test.map((item, index) => {

			const dots = this.state.test.map((item, index) => {
				let id = 0;
				return(
					<div key = {index}>
						<input id = {item.answer + 0} name = {item.answer} type = "checkbox" value = {item.variants[0]} onChange = {this.createAnswerByRadio.bind(this, index, id + 0)}/><label for = {item.answer + 0}>{item.variants[0]}</label><br/>
						<input id = {item.answer + 1} name = {item.answer} type = "checkbox" value = {item.variants[1]} onChange = {this.createAnswerByRadio.bind(this, index, id + 1)}/><label for = {item.answer + 1}>{item.variants[1]}</label><br/>
						<input id = {item.answer + 2} name = {item.answer} type = "checkbox" value = {item.variants[2]} onChange = {this.createAnswerByRadio.bind(this, index, id + 2)}/><label for = {item.answer + 2}>{item.variants[2]}</label><br/>
						<input id = {item.answer + 3} name = {item.answer} type = "checkbox" value = {item.variants[3]} onChange = {this.createAnswerByRadio.bind(this, index, id + 3)}/><label for = {item.answer + 3}>{item.variants[3]}</label><br/>
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
