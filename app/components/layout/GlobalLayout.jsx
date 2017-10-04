import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './header/Header.jsx';

import './GlobalLayout.less';

export default class GlobalLayout extends Component {
	static propTypes = {
		children: PropTypes.any,
	}

	render () {
		return (
			<div className='GlobalLayout'>
				<Header />
				<Grid>
					<Row>
						<Col
							sm={8}
							smOffset={2}
							md={6}
							mdOffset={3}
						>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}