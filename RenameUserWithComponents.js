
import React from 'react';
// import './App.css';


class User extends React.Component {

	render() {

		const list = this.props.names.map((item, index) =>{
			let input = (item.show) ? <input visibled = {item.show} value = {item.name} onChange = {this.props.renameInput.bind(null, index)} onBlur = {this.props.renameBlur.bind(null, index)}/> : item.name;
			return(
				<div key = {index}>

					<li>{input}</li>
					<button onClick = {this.props.renameButton.bind(null, index)}>Rename</button>
				</div>
			)
		});
		return (
			<div>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}

class RenameUserWithComponents extends React.Component {
	constructor() {
		super();

		this.state = {
			names: [
				{name: 'Kolya', show: false},
				{name: 'Oleg', show: false},
				{name: 'Gosha', show: false},
			],
			value: ''
		};
	}
	renameInput(index,event){
		this.state.names[index].name = event.target.value;
		this.setState({
			names: this.state.names,
		})
	}
	renameBlur(index){
		this.state.names[index].show = false;
		this.setState({
			names: this.state.names
		})
	}
	renameButton(index){
		this.state.names[index].show = true;
		this.setState({
			names: this.state.names
		})
	}


	render() {
		return <div>
			<User
				names = {this.state.names}
				renameButton = {this.renameButton.bind(this)}
				renameInput = {this.renameInput.bind(this)}
				renameBlur = {this.renameBlur.bind(this)}
			/>
		</div>;
	}
}
export default RenameUserWithComponents;
