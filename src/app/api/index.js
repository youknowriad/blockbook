import defaultStyle from 'bundle-text:./editor-styles.txt';

const registeredBlockTypes = [];
const registeredThemes = [
	{
		name: 'default',
		title: 'Default',
		editorStyles: defaultStyle,
	},
];

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
