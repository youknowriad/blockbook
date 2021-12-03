import { getRegisteredThemes, getRegisteredBlockTypes } from '../../api';
import { useParams } from 'react-router-dom';
import {
	getBlockType,
	getBlockFromExample,
	createBlock,
} from '@wordpress/blocks';
import { BlockPreview, BlockEditorProvider } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import './style.css';

const coreBlocks = [
	'core/paragraph',
	'core/image',
	'core/heading',
	'core/quote',
	'core/gallery',
	'core/buttons',
	'core/code',
	'core/columns',
	'core/cover',
	'core/embed',
	'core/html',
	'core/media-text',
	'core/latestComments',
	'core/list',
	'core/preformatted',
	'core/pullquote',
	'core/search',
	'core/group',
	'core/separator',
	'core/shortcode',
	'core/spacer',
	'core/table',
	'core/verse',
	'core/video',
	'core/social-links',
];

function onlyUnique( value, index, self ) {
	return self.indexOf( value ) === index;
}

export function RouteTheme() {
	const { slug } = useParams();
	const [ blocks, setBlocks ] = useState( [] );
	const currentTheme = getRegisteredThemes().find(
		( theme ) => theme.name === slug
	);
	useEffect( () => {
		setBlocks(
			coreBlocks
				.concat( getRegisteredBlockTypes() )
				.filter( onlyUnique )
				.map( getBlockType )
				.filter( ( blockType ) => !! blockType )
				.map( ( blockType ) => {
					if ( blockType.example ) {
						return getBlockFromExample(
							blockType.name,
							blockType.example
						);
					}
					return createBlock( blockType.name );
				} )
		);
	}, [] );

	if ( ! currentTheme ) {
		return 'Theme Not Found';
	}

	return (
		<div className="bb-route-theme">
			<h1>{ currentTheme.title }</h1>
			<BlockEditorProvider
				settings={ {
					styles: [ { css: currentTheme.editorStyles } ],
				} }
			>
				<BlockPreview viewportWidth={ 1000 } blocks={ blocks } />
			</BlockEditorProvider>
		</div>
	);
}
