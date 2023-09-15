import * as fs from 'fs';

const dir = 'production';

if ( fs.existsSync( dir ) ) {
	console.info( 'Production directory exists. Removing...' );

	fs.rmdir( dir, { recursive: true }, ( err ) => {
		if ( err ) {
			throw err
		}

		console.log( 'Production directory removed. Continue building...' );
	} );
} else {
	console.info( 'Production directory does not exists. Continue building...' );
}
