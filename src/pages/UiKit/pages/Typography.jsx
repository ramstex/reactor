import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../components/Markup/Section/Section.jsx';

class PageUiKitTypography extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page-home', className);
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Typography' }>

				</MarkupSection>
			</div>
		);
	}
}

PageUiKitTypography.propTypes = {
	className: PropTypes.node,
};

export default PageUiKitTypography;
