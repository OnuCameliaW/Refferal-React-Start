import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import addVacancy from './components/addVacancy/addVacancy';


render((
	<Router history={hashHistory}>
	    <Route path="/homepage" component={App} />
	    <Route path="/addVacancy" component={addVacancy} />
  </Router>
  ), document.getElementById('app'));

