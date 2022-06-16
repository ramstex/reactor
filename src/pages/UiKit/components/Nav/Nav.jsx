import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseLink from '../../../../components/Base/Link/Link.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';

import './Nav.scss';

class LocalNav extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'ui-kit-nav', className );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<Row>
					<Col>
						<BaseLink href={ '/ui-kit/typography' }>Typography</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/grid' }>Grid</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/colors' }>Colors</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/buttons' }>Buttons</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/inputs' }>Inputs</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/tabs' }>Tabs</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/forms' }>Forms</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/checkboxes' }>Checkboxes</BaseLink>
					</Col>

					<Col>
						<BaseLink href={ '/ui-kit/select' }>Select</BaseLink>
					</Col>
				</Row>
			</div>
		);
	}
}

LocalNav.propTypes = { className: PropTypes.node };

export default LocalNav;
