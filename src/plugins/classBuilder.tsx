import classnames from 'classnames'

import type { ArgumentArray } from 'classnames';

type TClassNames = ( ...args: ArgumentArray ) => string;

const buildClass: TClassNames = ( ...args: classnames.ArgumentArray ) => {
	return classnames( ...args );
}

export default buildClass;
