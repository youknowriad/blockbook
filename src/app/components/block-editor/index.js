import { getBlockFromExample, createBlock } from '@wordpress/blocks';
import { Editor } from '../editor';
import './style.css';

export function BlockEditor( { block } ) {
	return (
		<Editor
			key={ block.name }
			initialBlocks={ [
				block.example
					? getBlockFromExample( block.name, {
							attributes: block.example.attributes,
							innerBlocks: block.example.innerBlocks,
					  } )
					: createBlock( block.name ),
			] }
		/>
	);
}
