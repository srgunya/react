import React, { Component } from "react";
import Header from './header/header';

export default class App extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
	return <Header />;
	}
}