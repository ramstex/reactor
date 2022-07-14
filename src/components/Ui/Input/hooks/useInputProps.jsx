import omit from 'lodash/omit.js';

export default function useInputProps( props, propsToReplace ) {
	// Формируем список пропсов, которые нужно указать в поле ввода как есть.
	// Для этого из общего списка пропсов исключаются те, которые требуют доп. обработки перед указанием.
	// Пропс type указывается как он есть, но всё равно исключается, так как не является валидным для textarea.
	const propsAsIs = omit( props, [
		'className',
		'children',
		'value',
		'typeLocal',
		'textarea',
		'resize',
		'state',
		'size',
		'theme',
		'message',
		'type',
		'aside',
		'switchable',
		'clearable',
		'onChange',
		'onMounted',
	] );

	const inputProps = {
		...propsAsIs,
		...propsToReplace,
	};

	return {
		propsAsIs,
		inputProps,
	};
}
