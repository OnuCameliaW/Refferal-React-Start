import React from 'react';
import { render } from 'react-dom';
import Homepage from './Homepage';
export default class App extends React.Component {
	render() {
	        return (
	            <div>
	            <p>Test App</p>
	                <Homepage />  
	            </div>
	        );
	    }
}