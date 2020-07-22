import { __unstableEditorStyles as BlockEditorStyles } from '@wordpress/block-editor';
import { getRegisteredThemes } from '../../api';
import { useTheme } from '../../local-storage';

export function EditorStyles( { forceThemeName } ) {
	const [ currentThemeName ] = useTheme();
	const currentTheme =
		getRegisteredThemes().find(
			( theme ) => theme.name === ( forceThemeName || currentThemeName )
		) || getRegisteredThemes()[ 0 ];
	return (
		<BlockEditorStyles styles={ [ { css: currentTheme.editorStyles } ] } />
	);
}
