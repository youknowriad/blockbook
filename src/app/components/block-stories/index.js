import { getBlockFromExample } from '@wordpress/blocks';
import { BlockPreview, BlockEditorProvider } from '@wordpress/block-editor';
import './style.css';
import { useTheme } from '../../local-storage';
import { getRegisteredThemes } from '../../api';

export function BlockStories( { stories } ) {
	const [ currentThemeName ] = useTheme();
	const currentTheme =
		getRegisteredThemes().find(
			( theme ) => theme.name === currentThemeName
		) || getRegisteredThemes()[ 0 ];
	return (
		<div className="bb-route-block__stories">
			{ stories.map( ( blockStory ) => (
				<div key={ blockStory.name }>
					<h3>{ blockStory.name }</h3>
					<BlockEditorProvider
						settings={ {
							styles: [ { css: currentTheme.editorStyles } ],
						} }
					>
						<BlockPreview
							viewportWidth={ 1000 }
							blocks={ blockStory.blocks.map( ( childBlock ) =>
								getBlockFromExample(
									childBlock.name,
									childBlock
								)
							) }
						/>
					</BlockEditorProvider>
				</div>
			) ) }
		</div>
	);
}
