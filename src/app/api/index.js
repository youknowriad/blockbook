import defaultStyle from '!!raw-loader!./editor-styles.css';

const registeredBlockTypes = [];
const registeredThemes = [
	{
		name: 'default',
		title: 'Default',
		editorStyles: defaultStyle,
	},
];
const registeredBlockStories = {};

export function registerBlockType( blockName ) {
	registeredBlockTypes.push( blockName );
}

export function getRegisteredBlockTypes() {
	return registeredBlockTypes;
}

export function registerTheme( themeConfig ) {
	registeredThemes.push( themeConfig );
}

export function getRegisteredThemes() {
	return registeredThemes;
}

export function registerBlockStory( blockName, story ) {
	if ( ! registeredBlockStories[ blockName ] ) {
		registeredBlockStories[ blockName ] = [];
	}

	registeredBlockStories[ blockName ].push( story );
}

export function getBlockStories( blockName ) {
	return registeredBlockStories[ blockName ] ?? [];
}
