import React from 'react';

import './Grid.scss';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import dummy from './dummy.js';

class PageUiKitGrid extends React.Component {
	render() {
		return (
			<div className={ 'page-ui-kit-grid' }>
				<MarkupSection title={ 'Ui Kit - Grid' }>
					<LocalNav />

					<React.Fragment>
						{ dummy.rows.map( ( row, indexRow ) => {

							return (
								<React.Fragment key={ indexRow }>
									{ ( !!row.title && <h6>{ row.title }</h6> ) }

									{ ( !!row.description && <p>{ row.description }</p> ) }

									<Row className={ 'page-ui-kit-grid__row' } { ...row.props }>
										{ row.cols.map( ( col, indexCol ) => {
											return (
												<Col
													className={ 'page-ui-kit-grid__col' }
													key={ indexCol }
													{ ...col.props }
												>
													<div className="page-ui-kit-grid__col-content">
														{ col.content }
													</div>
												</Col>
											);
										} ) }
									</Row>
								</React.Fragment>
							);
						} ) }
					</React.Fragment>

					{/* <h6>Сетка с реверсом:</h6> */ }
					{/* <Row className={ 'page-ui-kit-grid__row' } reverse> */ }
					{/* 	<Col className={ 'page-ui-kit-grid__col' } col={ 3 }> */ }
					{/* 		<div className="page-ui-kit-grid__col-content"> */ }
					{/* 			<p>Первая колонка - 3 части</p> */ }
					{/* 		</div> */ }
					{/* 	</Col> */ }

					{/* 	<Col className={ 'page-ui-kit-grid__col' } col={ 5 }> */ }
					{/* 		<div className="page-ui-kit-grid__col-content"> */ }
					{/* 			<p>Вторая колонка - 5 частей</p> */ }
					{/* 		</div> */ }
					{/* 	</Col> */ }

					{/* 	<Col className={ 'page-ui-kit-grid__col' } col={ 4 }> */ }
					{/* 		<div className="page-ui-kit-grid__col-content"> */ }
					{/* 			<p>Третья колонка - 7 частей</p> */ }
					{/* 		</div> */ }
					{/* 	</Col> */ }
					{/* </Row> */ }
				</MarkupSection>
			</div>
		);
	}
}

export default PageUiKitGrid;
