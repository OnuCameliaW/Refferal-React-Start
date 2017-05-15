import React from 'react';
require('./style.scss');

export default  function(props) {

	return( 
	 	<div id = 'titleCol'>
				<label htmlFor = 'title'>Book title: </label>
					<input  id = 'title' 
							type='text' 
							name = 'title' 
							value = {props.title}
							placeholder='Title' 
							onChange = {props.handleStateOnChange}  
							/>
					<button type="button"
							onClick={props.sendData}>
						Submit
					</button>			 
		</div>
     );
}
