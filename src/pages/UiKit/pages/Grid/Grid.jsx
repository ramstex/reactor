import React from 'react';

import './Grid.scss';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import dummy from './dummy.js';

class PageUiKitGrid extends React.Component {
	render() {
		return (
			<div className={ 'page-ui-kit-grid' }>
				<MarkupSection title={ 'Ui Kit - Grid' }>
					<LocalNav />

					<div>
						{ dummy.rows.map( ( row, indexRow ) => {

							return (
								<React.Fragment key={ indexRow }>
									{ ( !!row.title && <h6>{ row.title }</h6> ) }

									{ ( !!row.description && <p>{ row.description }</p> ) }

									<GridRow className={ 'page-ui-kit-grid__row' }
										{ ...row.props }>
										{ row.cols.map( ( col, indexCol ) => {
											return (
												<GridCol
													className={ 'page-ui-kit-grid__col' }
													key={ indexCol }
													{ ...col.props }
												>
													<div className="page-ui-kit-grid__col-content">
														{ col.content }
													</div>
												</GridCol>
											);
										} ) }
									</GridRow>
								</React.Fragment>
							);
						} ) }
					</div>
				</MarkupSection>
			</div>
		);
	}
}

export default PageUiKitGrid;
