import { getBlockFromExample } from '@wordpress/blocks';
import { BlockPreview } from '@wordpress/block-editor';
import './style.css';

export function BlockStories( { stories } ) {
	return (
		<div className="bb-route-block__stories">
			{ stories.map( ( blockStory ) => (
				<div key={ blockStory.name }>
					<h3>{ blockStory.name }</h3>
					<BlockPreview
						viewportWidth={ 1000 }
						blocks={ blockStory.blocks.map( ( childBlock ) =>
							getBlockFromExample( childBlock.name, childBlock )
						) }
					/>
				</div>
			) ) }
		</div>
	);
}
