// ToDo: filling inputs and validation
// ToDo: adaptive

import Page from '../../../../components/markup/page/Page';
import Container from '../../../../components/markup/container/Container';
import Row from '../../../../components/grid/Row/Row';
import Col from '../../../../components/grid/Col/Col';
import Input from '../../../../components/ui/input/Input';

import type { FC } from 'react';

import './Input.scss';

const UiKitInput: FC = () => {
	return (
		<Page className={ 'page-ui-kit-input' }>
			<Container>
				<h2>Input</h2>

				<Row>
					<Col cols={ 3 }>
						<Input label />
					</Col>

					<Col
						cols={ 3 }
						offset={ 1 }
					>
						<Input placeholder={ 'placeholder' }>Input with label and placeholder</Input>
					</Col>

					<Col
						cols={ 3 }
						offset={ 1 }
					>
						<Input
							placeholder={ 'type something...' }
							message={ 'message' }
							name={ 'name1' }
							value={ 'Some text' }
						>Input with message</Input>
					</Col>

					<Col cols={ 3 }>
						<Input
							placeholder={ 'type something...' }
							message={ 'Disabled message' }
							disabled
						>Disabled input</Input>
					</Col>

					<Col
						cols={ 3 }
						offset={ 1 }
					>
						<Input
							placeholder={ 'type something...' }
							message={ 'Disabled message' }
							name={ 'name1' }
							value={ 'Some text' }
							disabled
						>Disabled input</Input>
					</Col>
				</Row>

				<Row>
					<Col
						cols={ 3 }
					>
						<Input
							placeholder={ 'placeholder' }
							message={ 'Success message' }
							state={ 'success' }
						>Success input</Input>
					</Col>

					<Col
						cols={ 3 }
						offset={ 1 }
					>
						<Input
							placeholder={ 'placeholder' }
							message={ 'Success message' }
							state={ 'success' }
							disabled
						>Success disabled input</Input>
					</Col>
				</Row>

				<Row>
					<Col
						cols={ 3 }
					>
						<Input
							placeholder={ 'placeholder' }
							message={ 'Error message' }
							state={ 'error' }
						>Error input</Input>
					</Col>

					<Col
						cols={ 3 }
						offset={ 1 }
					>
						<Input
							placeholder={ 'placeholder' }
							message={ 'Error message' }
							state={ 'error' }
							disabled
						>Error disabled input</Input>
					</Col>
				</Row>
			</Container>
		</Page>
	);
};

export default UiKitInput
