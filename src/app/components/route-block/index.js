import { useParams, Link } from 'react-router-dom';
import { getBlockType } from '@wordpress/blocks';
import { getBlockStories } from '../../api';
import './style.css';
import { ThemeSwitcher } from '../theme-switcher';
import { EditorStyles } from '../editor-styles';
import { Tabs } from '../tabs';
import { ButtonGroup } from '@wordpress/components';

export function RouteBlock() {
	const { slug, currentTab } = useParams();
	const blockSlug = slug.replace( '---', '/' );
	const blockType = getBlockType( blockSlug );
	const blockStories = getBlockStories( blockSlug );

	const tabs = [
		{ name: 'card', title: 'Card' },
		blockType.example && { name: 'example', title: 'Example' },
		blockType.example && { name: 'markup', title: 'Markup' },
		{ name: 'editor', title: 'Editor' },
		!! blockStories.length && {
			name: 'stories',
			title: 'Stories',
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
				{ tabs.map( ( tab, key ) => {
					const destination =
						tab.name === 'card'
							? `/block/${ slug }`
							: `/block/${ slug }/${ tab.name }`;

					const isSelected =
						tab.name === currentTab ||
						( currentTab === undefined && tab.name === 'card' );

					return (
						<Link
							key={ key }
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

			<Tabs
				selectedTab={ currentTab }
				block={ blockType }
				stories={ blockStories }
			/>
		</div>
	);
}
