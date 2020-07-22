#!/usr/bin/env node

const path = require( 'path' );
const { execSync } = require( 'child_process' );
const fs = require( 'fs' );
const { sync: resolveBin } = require( 'resolve-bin' );

const myArgs = process.argv.slice( 2 );
const env =
	'NODE_ENV=' + ( myArgs[ 0 ] === 'start' ? 'development' : 'production' );
const bin = myArgs[ 0 ] === 'start' ? 'webpack-dev-server' : 'webpack';
const command = myArgs[ 0 ] === 'start' ? '--open' : '';
const appEntryPoint = path.resolve( __dirname, '../app/index.js' );
const loadFile = path.resolve( __dirname, '../app/load.js' );
const configEntryPoint = path.resolve( process.cwd(), '.blockbook/index.js' );
const relativeConfigEntryPoint = path.relative(
	path.resolve( __dirname, '../app' ),
	configEntryPoint
);

// Load blockbook config
const importConfig = `import '${ relativeConfigEntryPoint }';\n`;
fs.writeFileSync( loadFile, importConfig );

execSync(
	[
		env,
		resolveBin( bin ),
		command,
		appEntryPoint,
		'--config',
		path.resolve( __dirname, 'webpack.config.js' ),
	].join( ' ' ),
	{
		stdio: 'inherit',
	}
);
