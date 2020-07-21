module.exports = ( api ) => {
	api.cache.using( () => process.env.NODE_ENV );
	return {
		presets: [ '@wordpress/babel-preset-default' ],
		plugins: [ '@babel/plugin-transform-runtime' ].filter( Boolean ),
	};
};
