import { useParams, Link, Route } from 'react-router-dom';
import { getBlockType } from '@wordpress/blocks';
import { getBlockStories } from '../../api';
import './style.css';
import { ThemeSwitcher } from '../theme-switcher';
import { ButtonGroup } from '@wordpress/components';

import { BlockCard } from '../block-card';
import { BlockEditor } from '../block-editor';
import { BlockExample } from '../block-example';
import { BlockMarkup } from '../block-markup';
import { BlockStories } from '../block-stories';

export function RouteBlock() {
	const { slug, currentTab } = useParams();
	const blockSlug = slug.replace( '---', '/' );
	const blockType = getBlockType( blockSlug );
	const blockStories = getBlockStories( blockSlug );

	const tabs = [
		{ name: 'card', title: 'Card', component: BlockCard },
		blockType.example && {
			name: 'example',
			title: 'Example',
			component: BlockExample,
		},
		blockType.example && {
			name: 'markup',
			title: 'Markup',
			component: BlockMarkup,
		},
		{ name: 'editor', title: 'Editor', component: BlockEditor },
		!! blockStories.length && {
			name: 'stories',
			title: 'Stories',
			component: BlockStories,
		},
	].filter( ( tab ) => !! tab );

	if ( ! blockType ) {
		return <div className="bb-route-block">Block type not found</div>;
	}

	return (
		<div className="bb-route-block">
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

			{ tabs.map( ( tab ) => {
				const destination =
					tab.name === 'card'
						? `/block/${ slug }`
						: `/block/${ slug }/${ tab.name }`;
				return (
					<Route
						key={ tab.name }
						exact={ tab.name === 'card' }
						path={ destination }
						render={ () => (
							<tab.component
								block={ blockType }
								stories={ blockStories }
							/>
						) }
					/>
				);
			} ) }
		</div>
	);
}
