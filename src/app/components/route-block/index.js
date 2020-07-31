import { useParams } from 'react-router-dom';
import {
	getBlockType,
	getBlockFromExample,
	serialize,
	createBlock,
} from '@wordpress/blocks';
import { BlockIcon, BlockPreview } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { Editor } from '../editor';
import { getBlockStories } from '../../api';
import './style.css';
import { ThemeSwitcher } from '../theme-switcher';
import { EditorStyles } from '../editor-styles';

export function RouteBlock() {
	const { slug } = useParams();
	const blockSlug = slug.replace( '---', '/' );
	const blockType = getBlockType( blockSlug );
	const blockStories = getBlockStories( blockSlug );

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

			<TabPanel
				tabs={ [
					{ name: 'card', title: 'Card' },
					blockType.example && { name: 'example', title: 'Example' },
					blockType.example && { name: 'markup', title: 'Markup' },
					{ name: 'editor', title: 'Editor' },
					!! blockStories.length && {
						name: 'stories',
						title: 'Stories',
					},
				].filter( ( tab ) => !! tab ) }
			>
				{ ( currentPanel ) => {
					if ( currentPanel.name === 'card' ) {
						return (
							<div className="bb-route-block__card">
								<div>
									<div className="bb-route-block__row">
										<strong>Name:</strong>
										{ ' ' }
										<code>{ blockType.name }</code>
									</div>
									<div className="bb-route-block__icon bb-route-block__row">
										<strong>Icon:</strong>
										{ ' ' }
										<BlockIcon icon={ blockType.icon } />
									</div>
									<div className="bb-route-block__row">
										<strong>Description:</strong>
										{ ' ' }
										{ blockType.description }
									</div>
									<div className="bb-route-block__row">
										<strong>Category:</strong>
										{ ' ' }
										{ blockType.category }
									</div>
									{ !! blockType?.keywords.length && (
										<div className="bb-route-block__row">
											<strong>Keywords:</strong>
											{ ' ' }
											{ blockType.keywords.join( ', ' ) }
										</div>
									) }
									{ !! Object.keys( blockType.supports ?? {} )
										.length && (
										<div className="bb-route-block__supports bb-route-block__row">
											<div>
												<h2>Supports</h2>
											</div>
											<ul className="bb-route-block__supports--list">
												{ Object.entries(
													blockType.supports
												).map( ( [ key, support ] ) => (
													<li key={ key }>
														<strong>{ key }</strong>{ ' ' }
														{ `- ${ JSON.stringify(
															support
														) }` }
													</li>
												) ) }
											</ul>
										</div>
									) }
								</div>
								<div>
									<div>
										<h2>Attributes</h2>
									</div>
									<ul className="bb-route-block__attributes">
										{ Object.entries(
											blockType.attributes
										).map( ( [ key, attributeScheme ] ) => (
											<li key={ key }>
												<strong>{ key }</strong>{ ' ' }
												{ attributeScheme.type &&
													`(${ attributeScheme.type })` }
											</li>
										) ) }
									</ul>
								</div>
							</div>
						);
					}

					if ( currentPanel.name === 'example' ) {
						return (
							<div className="bb-route-block__example">
								<BlockPreview
									viewportWidth={ 1000 }
									blocks={ getBlockFromExample(
										blockType.name,
										{
											attributes:
												blockType.example.attributes,
											innerBlocks:
												blockType.example.innerBlocks,
										}
									) }
								/>
							</div>
						);
					}

					if ( currentPanel.name === 'markup' ) {
						return (
							<pre className="bb-route-block__markup">
								{ serialize(
									getBlockFromExample( blockType.name, {
										attributes:
											blockType.example.attributes,
										innerBlocks:
											blockType.example.innerBlocks,
									} )
								) }
							</pre>
						);
					}

					if ( currentPanel.name === 'editor' ) {
						return (
							<Editor
								key={ blockType.name }
								initialBlocks={ [
									blockType.example
										? getBlockFromExample( blockType.name, {
												attributes:
													blockType.example
														.attributes,
												innerBlocks:
													blockType.example
														.innerBlocks,
										  } )
										: createBlock( blockType.name ),
								] }
							/>
						);
					}

					if ( currentPanel.name === 'stories' ) {
						return (
							<div className="bb-route-block__stories">
								{ blockStories.map( ( blockStory ) => (
									<div key={ blockStory.name }>
										<h3>{ blockStory.name }</h3>
										<BlockPreview
											viewportWidth={ 1000 }
											blocks={ blockStory.blocks.map(
												( block ) =>
													getBlockFromExample(
														block.name,
														block
													)
											) }
										/>
									</div>
								) ) }
							</div>
						);
					}
				} }
			</TabPanel>
		</div>
	);
}
