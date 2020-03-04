import React, { Component } from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError: false
		}
	}
	static getDerivedStateFromError(event){
		console.log("sljflsdflsk");
		return {hasError:true};
	}
	render(){
		if(this.state.hasError){
			console.log("hello");
			return <h1>Ooops!!There is a problem with the component...</h1>;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;