import React from 'react';
class App extends React.Component{
	constructor(){
		super();
		this.state ={
			txt:'hi 1',
			count: 5
		}
		this.update = this.update.bind(this);
	}
	update({target}){
		this.setState({
			...this.state,
			[target.getAttribute('data-param')]:target.value
		})
	}
	render(){
		return (
			<div>
			<input type="text" data-param="txt" onChange={this.update} />
			<input type="text" data-param="count" onChange={this.update} />
			<h1>{this.state.txt}</h1>
			<h1>{this.state.count}</h1>
			</div>
			);

	}
}
//const App = () => <h2>Hi 2</h2>

export default App