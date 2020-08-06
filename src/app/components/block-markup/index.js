import { getBlockFromExample, serialize } from '@wordpress/blocks';
import './style.css';

export function BlockMarkup( { block } ) {
	return (
		<pre className="bb-route-block__markup">
			{ serialize(
				getBlockFromExample( block.name, {
					attributes: block.example.attributes,
					innerBlocks: block.example.innerBlocks,
				} )
			) }
		</pre>
	);
}
