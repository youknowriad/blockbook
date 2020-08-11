import { useParams, Link } from 'react-router-dom';
import { getBlockType } from '@wordpress/blocks';
import { getBlockStories } from '../../api';
import './style.css';
import { ThemeSwitcher } from '../theme-switcher';
import { EditorStyles } from '../editor-styles';
import { ButtonGroup } from '@wordpress/components';

import { BlockCard } from '../block-card';
import { BlockEditor } from '../block-editor';
import { BlockExample } from '../block-example';
import { BlockMarkup } from '../block-markup';
import { BlockStories } from '../block-stories';
import { BlockSave } from '../block-save';

export function RouteBlock() {
	const { slug, currentTab } = useParams();
	const blockSlug = slug.replace( '---', '/' );
	const blockType = getBlockType( blockSlug );
	const blockStories = getBlockStories( blockSlug );

	let blockHasSaveMethod = false;
	// this is done in a try catch block because we don't have the props etc to pass into the save method
	// therefore we are only concerned with wether the save method returns null or throws an error.
	try {
		if ( !! blockStories.length ) {
			blockType.save();
		}
	} catch {
		blockHasSaveMethod = true;
	}

	const tabs = [
		{ name: 'card', title: 'Card' },
		blockType.example && { name: 'example', title: 'Example' },
		blockType.example && { name: 'markup', title: 'Markup' },
		{ name: 'editor', title: 'Editor' },
		!! blockStories.length && {
			name: 'stories',
			title: 'Stories',
		},
		blockHasSaveMethod && {
			name: 'save',
			title: 'Save',
		},
	].filter( ( tab ) => !! tab );

	if ( ! blockType ) {
		return <div className="bb-route-block">Block type not found</div>;
	}

	return (
		<div className="bb-route-block">
			<EditorStyles />
			<div className="bb-route-block__header">
				<h1>{ blockType.title }</h1>
				<div className="bb-route-block__theme-switcher">
					<ThemeSwitcher />
				</div>
			</div>

			<ButtonGroup>
				{ tabs.map( ( tab ) => {
					const destination =
						tab.name === 'card'
							? `/block/${ slug }`
							: `/block/${ slug }/${ tab.name }`;

					const isSelected =
						tab.name === currentTab ||
						( currentTab === undefined && tab.name === 'card' );

					return (
						<Link
							key={ tab.name }
							className={ `components-button ${
								isSelected ? 'is-pressed' : ''
							}` }
							to={ destination }
						>
							{ tab.title }
						</Link>
					);
				} ) }
			</ButtonGroup>

			{ currentTab === '' || currentTab === undefined ? (
				<BlockCard block={ blockType } />
			) : null }

			{ currentTab === 'example' ? (
				<BlockExample block={ blockType } />
			) : null }

			{ currentTab === 'markup' ? (
				<BlockMarkup block={ blockType } />
			) : null }

			{ currentTab === 'editor' ? (
				<BlockEditor block={ blockType } />
			) : null }

			{ currentTab === 'stories' ? (
				<BlockStories stories={ blockStories } />
			) : null }

			{ currentTab === 'save' ? (
				<BlockSave stories={ blockStories } />
			) : null }
		</div>
	);
}
