#!/usr/bin/env node

const path = require( 'path' );
const { execSync } = require( 'child_process' );
const fs = require( 'fs' );

const myArgs = process.argv.slice( 2 );
const command = myArgs[ 0 ] === 'start' ? '' : 'build';

const appEntryPoint = path.resolve( __dirname, '../app/index.html' );
const loadFile = path.resolve( __dirname, '../app/load.js' );
const configEntryPoint = path.resolve( process.cwd(), '.blockbook/index.js' );
const relativeConfigEntryPoint = path.relative(
	path.resolve( __dirname, '../app' ),
	configEntryPoint
);
const dist = process.cwd() + '/dist';

// Load blockbook config
const importConfig = `import '${ relativeConfigEntryPoint }';`;
fs.writeFileSync( loadFile, importConfig );

execSync(
	'npx parcel ' + command + ' ' + appEntryPoint + ' --dist-dir ' + dist,
	{
		cwd: path.resolve( __dirname, '../../' ),
		env: {
			PATH: process.env.PATH,
			HOME: process.env.HOME,
		},
		stdio: [ 'inherit', 'inherit', 'inherit' ],
	}
);
