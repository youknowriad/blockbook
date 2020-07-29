import {
	registerBlockType,
	registerTheme,
	registerBlockStory,
} from 'blockbook-api';

import twentyNineteenStyle from '!!raw-loader!./themes/twenty-nineteen.css';
import twentyTwentyStyle from '!!raw-loader!./themes/twenty-twenty.css';

// Register BlockBook blocks.
const coreBlocks = [
	'core/archives',
	'core/audio',
	'core/buttons',
	'core/calendar',
	'core/categories',
	'core/code',
	'core/columns',
	'core/cover',
	'core/embed',
	'core/file',
	'core/gallery',
	'core/group',
	'core/heading',
	'core/html',
	'core/image',
	'core/latest-posts',
	'core/latestComments',
	'core/list',
	'core/media-text',
	'core/paragraph',
	'core/preformatted',
	'core/pullquote',
	'core/quote',
	'core/rss',
	'core/search',
	'core/separator',
	'core/shortcode',
	'core/social-links',
	'core/spacer',
	'core/table',
	'core/tag-cloud',
	'core/verse',
	'core/video',
];
coreBlocks.forEach( ( block ) => registerBlockType( block ) );

// Register Themes
registerTheme( {
	name: 'twenty-nineteen',
	title: 'TwentyNineteen',
	editorStyles: twentyNineteenStyle,
} );
registerTheme( {
	name: 'twenty-twenty',
	title: 'TwentyTwenty',
	editorStyles: twentyTwentyStyle,
} );

// Register BlockStories
registerBlockStory( 'core/buttons', {
	name: 'Two Buttons',
	blocks: [
		{
			name: 'core/buttons',
			attributes: {
				align: 'center',
			},
			innerBlocks: [
				{
					name: 'core/button',
					attributes: {
						backgroundColor: 'very-dark-gray',
						borderRadius: 0,
						text: 'Get Started',
					},
					innerBlocks: [],
				},
				{
					name: 'core/button',
					attributes: {
						borderRadius: 0,
						className: 'is-style-outline',
						text: 'Learn more',
						textColor: 'very-dark-gray',
					},
					innerBlocks: [],
				},
			],
		},
	],
} );

registerBlockStory( 'core/buttons', {
	name: 'Three Buttons',
	blocks: [
		{
			name: 'core/buttons',
			attributes: {
				align: 'center',
			},
			innerBlocks: [
				{
					name: 'core/button',
					attributes: {
						borderRadius: 3,
						style: { color: { background: '#007cba' } },
						text: 'Authors',
						textColor: 'white',
					},
					innerBlocks: [],
				},
				{
					name: 'core/button',
					attributes: {
						borderRadius: 3,
						style: { color: { background: '#007cba' } },
						text: 'Publishers',
						textColor: 'white',
					},
					innerBlocks: [],
				},
				{
					name: 'core/button',
					attributes: {
						borderRadius: 3,
						style: { color: { background: '#1e1e1e' } },
						text: 'Books',
						textColor: 'white',
					},
					innerBlocks: [],
				},
			],
		},
	],
} );
