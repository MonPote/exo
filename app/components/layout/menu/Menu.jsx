import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Menu.less';

export default class Menu extends Component {
	render () {
		return (
			<ul className='Menu'>
				<li className='Menu-item'>
					<Link
						className='Menu-link'
						activeClassName='isSelected'
						to='/'
					>
						Home
					</Link>
          <Link to='/faq'>Faq</Link>
				</li>
			</ul>
		);
	}
}
