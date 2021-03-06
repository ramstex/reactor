import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';
import LocalColor from '../../components/Color/Color.jsx';

import './Colors.scss';

class PageUiKitColors extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'page page-ui-kit-colors', className );
	}

	classNameCol() {
		return classnames( '_mb_6' );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Colors' }>
					<LocalNav />

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#c0baff' }
								title={ 'Primary' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#7e7ab0' }
								title={ 'Primary dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#d6d1ff' }
								title={ 'Primary light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#491818' }
								title={ 'Secondary' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#341313' }
								title={ 'Secondary dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#813434' }
								title={ 'Secondary light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#30CF60' }
								title={ 'Success' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#239646' }
								title={ 'Success dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#69e18d' }
								title={ 'Success light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#F7D264' }
								title={ 'Warning' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#b4994a' }
								title={ 'Warning dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#fce5a7' }
								title={ 'Warning light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#F77F6E' }
								title={ 'Danger' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#9d5349' }
								title={ 'Danger dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#f5aea4' }
								title={ 'Danger light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#ABDDED' }
								title={ 'Info' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#75a1af' }
								title={ 'Info dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#c4e4ef' }
								title={ 'Info light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#cbcbcb' }
								title={ 'Muted' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#999999' }
								title={ 'Muted dark' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#EDEDED' }
								title={ 'Muted light' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#161616' }
								title={ 'Text' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#f5f5f5' }
								title={ 'Back' }
								border={ '#161616' } />
						</GridCol>
					</GridRow>

					<GridRow>
						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#FFFFFF' }
								title={ 'White' } />
						</GridCol>

						<GridCol className={ this.classNameCol() }
							col={ 2 }>
							<LocalColor code={ '#000000' }
								title={ 'Black' }
								border={ '#161616' } />
						</GridCol>
					</GridRow>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitColors.propTypes = { className: PropTypes.string };

export default PageUiKitColors;
