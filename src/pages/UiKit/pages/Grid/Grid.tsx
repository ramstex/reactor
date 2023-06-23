import { EColCols } from '../../../../components/Grid/Col/helpers';
import { ERowAlignH, ERowAlignV } from '../../../../components/Grid/Row/helpers';

import Section from '../../../../components/Markup/Section/Section';
import Row from '../../../../components/Grid/Row/Row';
import Col from '../../../../components/Grid/Col/Col';

import './style.scss';

const UiKitGrid = () => {
	return (
		<div className={ 'ui-kit-grid' }>
			<Section>
				<div className={ 'ui-kit-grid__content' }>
					<h5 className={ '_mt_5' }>Default grid</h5>

					<Row>
						<Col cols={ 2 }>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content
							</div>
						</Col>

						<Col
							cols={ 2 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content<br />
							Col Content<br />
							Col Content<br />
							Col Content
							</div>
						</Col>

						<Col
							cols={ 4 }
							offset={ EColCols.auto }
						>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content
							</div>
						</Col>

						<Col cols={ 5 }>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content<br />
							Col Content<br />
							Col Content
							</div>
						</Col>

						<Col
							cols={ 5 }
							offset={ 1 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content
							</div>
						</Col>
					</Row>

					<h5 className={ '_mt_5' }>Reverse grid</h5>

					<Row reverse>
						<Col cols={ 2 }>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content
							</div>
						</Col>

						<Col
							cols={ 2 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content<br />
							Col Content<br />
							Col Content<br />
							Col Content
							</div>
						</Col>

						<Col
							cols={ 4 }
							offset={ EColCols.auto }
						>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content
							</div>
						</Col>

						<Col cols={ 5 }>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content<br />
							Col Content<br />
							Col Content
							</div>
						</Col>

						<Col
							cols={ 5 }
							offset={ 1 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
							Col Content
							</div>
						</Col>
					</Row>

					<h5 className={ '_mt_5' }>Vertical centered grid</h5>

					<Row alignV={ ERowAlignV.center }>
						<Col cols={ 2 }>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content
							</div>
						</Col>

						<Col
							cols={ 2 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content<br />
								Col Content<br />
								Col Content<br />
								Col Content
							</div>
						</Col>

						<Col
							cols={ 4 }
							offset={ EColCols.auto }
						>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content
							</div>
						</Col>

						<Col cols={ 5 }>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content<br />
								Col Content<br />
								Col Content
							</div>
						</Col>

						<Col
							cols={ 5 }
							offset={ 1 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content
							</div>
						</Col>
					</Row>

					<h5 className={ '_mt_5' }>Horizontal end-aligned grid</h5>

					<Row alignH={ ERowAlignH.end }>
						<Col cols={ 2 }>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content
							</div>
						</Col>

						<Col
							cols={ 2 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content<br />
								Col Content<br />
								Col Content<br />
								Col Content
							</div>
						</Col>

						<Col
							cols={ 4 }
							offset={ EColCols.auto }
						>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content
							</div>
						</Col>

						<Col cols={ 5 }>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content<br />
								Col Content<br />
								Col Content
							</div>
						</Col>

						<Col
							cols={ 5 }
							offset={ 1 }
						>
							<div className={ 'ui-kit-grid__col-content' }>
								Col Content
							</div>
						</Col>
					</Row>
				</div>
			</Section>
		</div>
	);
}

export default UiKitGrid;
