import { getBlockFromExample } from '@wordpress/blocks';
import { BlockPreview } from '@wordpress/block-editor';
import './style.css';

export function BlockEditor( { block } ) {
	return (
		<div className="bb-route-block__example">
			<BlockPreview
				viewportWidth={ 1000 }
				blocks={ getBlockFromExample( block.name, {
					attributes: block.example.attributes,
					innerBlocks: block.example.innerBlocks,
				} ) }
			/>
		</div>
	);
}
