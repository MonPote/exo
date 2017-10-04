import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'modules/store.js';

import Home from 'components/home/Home.jsx';
import Faq from 'components/Faq.jsx'

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path='/' component={Home} />
        <Route path='/faq' component={Faq} />
			</Router>
		);
	}
}
