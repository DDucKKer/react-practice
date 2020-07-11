import React from 'react';
//import './App.css';


class Questionnaire extends React.Component {
	constructor() {
		super();
		this.state = {
			test: [
				{
					question: 'Вопрос 1',
					answers: [
						'Ответ1',
						'Ответ2',
						'Ответ3',
						'Ответ4',
						'Ответ5',
					],
					right: 3,
					show: false
				},
				{
					question: 'Вопрос 2',
					answers: [
						'Ответ1',
						'Ответ2',
						'Ответ3',
						'Ответ4',
						'Ответ5',
					],
					right: 3,
					show: false
				},
				{
					question: 'Вопрос 3',
					answers: [
						'Ответ1',
						'Ответ2',
						'Ответ3',
						'Ответ4',
						'Ответ5',
					],
					right: 3,
					show: false
				},
			],
			css:{ color: 'white'}
		};

	}

	checkRight(index, id){
		if(this.state.test[index].right === (id + 1)){
			this.state.test[index].show = !this.state.test[index].show
		}
		else{
			this.state.test[index].show = false
		}
		this.setState({
			test: this.state.test
		})

	}
	render() {
		const list = this.state.test.map((item, index) =>{
			const answers = item.answers.map((answer, id) =>{
				return (
					<p key = {id}>
						<input
							name = {index}
							type = 'radio'
							key = {id}
							onChange = {this.checkRight.bind(this, index, id)}
						/>
						{answer}
					</p>
				)
			});
			return(
				<div key = {index}>
					<h3  className = {(this.state.test[index].show)? 'green' :  'red'}>{item.question}</h3>

					{answers}
				</div>
			)
		})

		return (
			<div>
				{list}
			</div>
		)
	}
}
export default Questionnaire;
