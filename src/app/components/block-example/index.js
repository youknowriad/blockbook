import { getBlockFromExample } from '@wordpress/blocks';
import { BlockPreview, BlockEditorProvider } from '@wordpress/block-editor';
import './style.css';
import { getRegisteredThemes } from '../../api';
import { useTheme } from '../../local-storage';

export function BlockExample( { block } ) {
	const [ currentThemeName ] = useTheme();
	const currentTheme =
		getRegisteredThemes().find(
			( theme ) => theme.name === currentThemeName
		) || getRegisteredThemes()[ 0 ];

	return (
		<div className="bb-route-block__example">
			<BlockEditorProvider
				settings={ {
					styles: [ { css: currentTheme.editorStyles } ],
				} }
			>
				<BlockPreview
					viewportWidth={ 1000 }
					blocks={ getBlockFromExample( block.name, {
						attributes: block.example.attributes,
						innerBlocks: block.example.innerBlocks,
					} ) }
				/>
			</BlockEditorProvider>
		</div>
	);
}
