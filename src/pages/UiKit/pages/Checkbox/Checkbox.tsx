import { useState } from 'react';

import Section from '../../../../components/Markup/Section/Section';
import Checkbox from '../../../../components/Ui/Checkbox/Checkbox';
import Row from '../../../../components/Grid/Row/Row';
import Col from '../../../../components/Grid/Col/Col';

import './style.scss';

const UiKitCheckbox = () => {
	const [ v1, setV1 ] = useState( false );
	const [ v2, setV2 ] = useState( true );

	return (
		<div>
			<Section>
				<Row>
					<Col>
						<Checkbox
							checked={ v1 }
							onChange={ ( event ) => {
								setV1( !!event.target.value )
							} }
						>
						Some label 1
						</Checkbox>
					</Col>

					<Col>
						<p>value: { v1.toString() } </p>
					</Col>
				</Row>

				<Row>
					<Col>
						<Checkbox
							checked={ v2 }
							onChange={ ( event ) => {
								setV2( !!event.target.value )
							} }
						>
							Some label 2
						</Checkbox>
					</Col>

					<Col>
						<p>value: { v2.toString() } </p>
					</Col>
				</Row>
			</Section>
		</div>
	);
};

export default UiKitCheckbox;
