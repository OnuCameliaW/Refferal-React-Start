import React from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
		};	
		this.handleStateOnChange = this.handleStateOnChange.bind(this);
		this.sendData = this.sendData.bind(this);	
		this.handleAjaxCall = this.handleAjaxCall.bind(this);
	}
	
		handleAjaxCall(result){
            this.setState({
				title: result
			});
	
	
	}
	componentDidMount() {
		$.ajax({
            url: "http://localhost:8080/api/Product/GetProduct?id=1",
            type: "GET",
            success: function (result) {
               console.log(result.Name);
             	this.handleAjaxCall(result.Name);
              
            }.bind(this)
        });
	}

	handleStateOnChange(e){
		console.log(e.target.value);
		this.setState({
			title: e.target.value
		});
	      
	}
	sendData(){
		console.log("Submit: " + this.state.title);
		let urlValue = "http://localhost:8080/api/Product/ReceiveTest?prod=" + this.state.title;
		$.ajax({
            url: urlValue,
            type: "POST",
            success: function (result) {
                console.log("succes");
            }
        });
	}
	render() {
	        return (
	            <div>
	            <p>Test App</p>
	                <Homepage 
	                	title = { this.state.title }
       					handleStateOnChange = { this.handleStateOnChange } 
       					sendData = { this.sendData } />  
	            </div>
	        );
	    }
}