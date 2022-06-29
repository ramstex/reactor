import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../components/Markup/Section/Section.jsx';
import LocalNav from './components/Nav/Nav.jsx';

class PageUiKit extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'page page-ui-kit', className );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit' }>
					<LocalNav />

					<p>Ui Kit Page</p>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKit.propTypes = { className: PropTypes.string };

export default PageUiKit;
