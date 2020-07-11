import React from 'react';


class Show extends React.Component {


	render(){
		const list = this.props.products.map((item, index) => {
			return(
				<tr key = {index}>
					<td>{index + 1}</td>
					<td>{item.name}</td>
					<td>{item.count * item.priceForOne}</td>
					<td><button onClick = {this.props.deleteProduct.bind(null, index)}>Delete</button></td>
					<td><input type = "checkbox" checked = {item.check} onChange = {this.props.changeCheck.bind(null, index)}/></td>
				</tr>
			)
		});

		return (
			<div>
				<table className ="table  table-bordered col-sm-5">
					<tbody>
						<th scope="col">#</th><th scope="col">Name</th><th scope="col">All Cost</th><th scope="col"></th><th scope="col"></th>
						{list}
					</tbody>
				</table>
			</div>
		)
	}
}

class AllProductsCost extends React.Component {


	render(){
		return (
			<div>
				<p>Name:<br/>
					<input value = {this.props.newName} onChange = {this.props.addNewName.bind(null)} />
				</p>
				<p>Count: <br/>
					<input value = {this.props.newCount} onChange = {this.props.addNewCount.bind(null)} />
				</p>
				<p>Price for one <br/>
					<input value = {this.props.newPrice} onChange = {this.props.addNewPrice.bind(null)}/>
				</p>
				<button onClick = {this.props.addProduct.bind(null)}>Add</button>
			</div>
		)
	}
}
class AllCost extends React.Component{
	render(){
		let allCost = 0;
		for(let i = 0; i < this.props.products.length; i++){
			if(this.props.products[i].check) allCost += this.props.products[i].priceForOne * this.props.products[i].count;
		}
		return(
			<div>
				<h1>All cost is: {allCost}</h1>
			</div>
		)
	}
}
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			products: [
				{name: 'banana', count: 2, priceForOne:10, check: true},
				{name: 'strawberry', count: 5, priceForOne:15, check: true},
				{name: 'cherry', count: 7, priceForOne:20, check: true},
			],
			newName: '',
			newCount: '',
			newPrice: ''
		};
	}
	deleteProduct(index){
		this.state.products.splice(index, 1);
		this.setState({
			products: this.state.products
		})
	}
	changeCheck(index){
		this.state.products[index].check = !this.state.products[index].check;
		this.setState({
			products: this.state.products
		})
	}
	addProduct(){
		this.state.products.push({name: this.state.newName, count: this.state.newCount, priceForOne: this.state.newPrice})
		this.setState({
			products: this.state.products
		})
	}
	addNewName(event){
		this.setState({
			newName: event.target.value
		})
	}
	addNewCount(event){
		this.setState({
			newCount: event.target.value
		})
	}
	addNewPrice(event){
		this.setState({
			newPrice: event.target.value
		})
	}

	render() {
		return (
			<div>
				<Show
					products = {this.state.products}
					deleteProduct ={this.deleteProduct.bind(this)}
					changeCheck ={this.changeCheck.bind(this)}
				/>
				<Add
					addProduct = {this.addProduct.bind(this)}
					newName =  {this.state.newName}
					newCount = {this.state.newCount}
					newPrice = {this.state.newPrice}
					addNewName = {this.addNewName.bind(this)}
					addNewCount = {this.addNewCount.bind(this)}
					addNewPrice = {this.addNewPrice.bind(this)}
				/>
				<AllCost
					products = {this.state.products}
				/>
			</div>
		)
	}
}
export default AllProductsCost;
