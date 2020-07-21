import { Link } from 'react-router-dom';
import { useState } from '@wordpress/element';
import { getBlockType } from '@wordpress/blocks';
import { SearchControl } from '../search-control';
import { getRegisteredBlocks } from '../../api';
import './style.css';

const matchKeywords = ( keywords, string ) => {
	return keywords.some(
		( keyword ) =>
			keyword && keyword.toLowerCase().includes( string.toLowerCase() )
	);
};

function MenuItem( { blockType } ) {
	if ( ! blockType ) {
		return null;
	}
	return (
		<li>
			<Link to={ `/block/${ blockType.name.replace( '/', '---' ) }` }>
				{ blockType.title }
			</Link>
		</li>
	);
}

export function Menu() {
	const [ filterValue, setFilterValue ] = useState( '' );
	const blockTypes = getRegisteredBlocks()
		.map( ( slug ) => getBlockType( slug ) )
		.filter( ( blockType ) =>
			matchKeywords(
				[
					blockType?.title,
					blockType?.category,
					...( blockType?.keywords ?? [] ),
				],
				filterValue
			)
		);

	return (
		<div className="bb-menu">
			<SearchControl
				label="Search blocks"
				value={ filterValue }
				onChange={ setFilterValue }
			/>
			<ul>
				{ blockTypes.map( ( blockType ) => (
					<MenuItem key={ blockType.name } blockType={ blockType } />
				) ) }
			</ul>
		</div>
	);
}
