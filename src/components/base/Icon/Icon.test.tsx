import TestRenderer from 'react-test-renderer';
import Icon from './Icon';

it('changes the class when hovered', () => {
	const component = TestRenderer.create(
		<Icon name={ 'close' } />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	TestRenderer.act(() => {
		tree.props.onMouseEnter();
	});
	// re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	TestRenderer.act(() => {
		tree.props.onMouseLeave();
	});
	// re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
