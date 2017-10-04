import React, { Component, PropTypes } from 'react';
import Layout from 'components/layout/GlobalLayout.jsx';
import './Home.less';
import { Link } from 'react-router'

export default class Home extends Component {
	render () {
		return (
			<Layout>
				<h1 className='Home-title'>Home</h1>
				<h2 className='Home-subtitle'>React test</h2>
				<ol className='Home-list'>
					<li className='Home-list-item'>
						Clone repo
					</li>
					<li className='Home-list-item'>
						Run example
					</li>
					<li className='Home-list-item'>
						Create a <code>&lt;Route /&gt;</code> that points to <code>/faq</code>
					</li>
					<li className='Home-list-item'>
						Add a <a href='https://reacttraining.com/react-router/web/api/Link'><strong>React Router Link</strong></a> into <a href='components/layout/menu/Menu.jsx'><code>&lt;Menu /&gt;</code></a> above.
					</li>
					<li className='Home-list-item'>
						See readme for more info.
					</li>
				</ol>
			</Layout>
		);
	}
}
