import { Link } from 'react-router-dom';
import { useState } from '@wordpress/element';
import { getBlockType } from '@wordpress/blocks';
import { SearchControl } from '../search-control';
import { getRegisteredBlockTypes, getRegisteredThemes } from '../../api';
import './style.css';

const matchKeywords = ( keywords, string ) => {
	return keywords.some(
		( keyword ) =>
			keyword && keyword.toLowerCase().includes( string.toLowerCase() )
	);
};

function MenuItemBlockType( { blockType } ) {
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

function MenuItemTheme( { theme } ) {
	if ( ! theme ) {
		return null;
	}
	return (
		<li>
			<Link to={ `/theme/${ theme.name }` }>{ theme.title }</Link>
		</li>
	);
}

export function Menu() {
	const [ filterValue, setFilterValue ] = useState( '' );
	const blockTypes = getRegisteredBlockTypes()
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
	const themes = getRegisteredThemes().filter( ( theme ) =>
		matchKeywords( [ theme?.title, theme?.name ], filterValue )
	);

	return (
		<div className="bb-menu">
			<SearchControl
				label="Search blocks and themes"
				value={ filterValue }
				onChange={ setFilterValue }
			/>

			{ !! blockTypes.length && (
				<>
					<h3>Blocks</h3>
					<ul>
						{ blockTypes.map( ( blockType ) => (
							<MenuItemBlockType
								key={ blockType.name }
								blockType={ blockType }
							/>
						) ) }
					</ul>
				</>
			) }

			{ !! themes.length && (
				<>
					<h3>Themes</h3>
					<ul>
						{ themes.map( ( theme ) => (
							<MenuItemTheme key={ theme.name } theme={ theme } />
						) ) }
					</ul>
				</>
			) }
		</div>
	);
}
