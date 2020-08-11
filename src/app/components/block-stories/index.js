import { getBlockFromExample, serialize } from '@wordpress/blocks';
import './style.css';

export function BlockStories( { stories } ) {
	function getBlockMarkup( blockStory ) {
		return serialize(
			blockStory.blocks.map( ( childBlock ) =>
				getBlockFromExample( childBlock.name, childBlock )
			)
		);
	}

	return (
		<div className="bb-route-block__stories">
			{ stories.map( ( blockStory ) => (
				<div key={ blockStory.name }>
					<h3>{ blockStory.name }</h3>
					<div
						className="bb-route-block__stories--preview"
						dangerouslySetInnerHTML={ {
							__html: getBlockMarkup( blockStory ),
						} }
					></div>
				</div>
			) ) }
		</div>
	);
}
