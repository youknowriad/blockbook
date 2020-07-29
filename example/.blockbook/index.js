import {
	registerBlockType,
	registerTheme,
	registerBlockStory,
} from 'blockbook-api';

import twentyNineteenStyle from '!!raw-loader!./themes/twenty-nineteen.css';
import twentyTwentyStyle from '!!raw-loader!./themes/twenty-twenty.css';

// Register BlockBook blocks.
const coreBlocks = [
	'core/paragraph',
	'core/image',
	'core/heading',
	'core/quote',
	'core/gallery',
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
	'core/html',
	'core/media-text',
	'core/latestComments',
	'core/latest-posts',
	'core/list',
	'core/preformatted',
	'core/pullquote',
	'core/rss',
	'core/search',
	'core/group',
	'core/separator',
	'core/shortcode',
	'core/spacer',
	'core/table',
	'core/verse',
	'core/video',
	'core/tag-cloud',
	'core/social-links',
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
registerBlockStory( 'core/heading', {
	name: 'Heading Level 1',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading one',
				level: 1,
			},
		},
	],
} );

registerBlockStory( 'core/heading', {
	name: 'Heading Level 2',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading two',
				level: 2,
			},
		},
	],
} );

registerBlockStory( 'core/heading', {
	name: 'Heading Level 3',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading three',
				level: 3,
			},
		},
	],
} );

registerBlockStory( 'core/heading', {
	name: 'Heading Level 4',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading four',
				level: 4,
			},
		},
	],
} );

registerBlockStory( 'core/heading', {
	name: 'Heading Level 5',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading five',
				level: 5,
			},
		},
	],
} );

registerBlockStory( 'core/heading', {
	name: 'Heading Level 6',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading six',
				level: 6,
			},
		},
	],
} );

registerBlockStory( 'core/heading', {
	name: 'Heading with colors',
	blocks: [
		{
			name: 'core/heading',
			attributes: {
				content: 'Heading with colors',
				level: 2,
				backgroundColor: 'very-dark-gray',
				textColor: 'white',
			},
		},
	],
} );

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

registerBlockStory( 'core/media-text', {
	name: 'Media on Left',
	blocks: [
		{
			name: 'core/media-text',
			attributes: {
				align: 'center',
				mediaType: 'image',
				mediaPosition: 'left',
			},
			attributes: {
				mediaType: 'image',
				mediaUrl: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
				mediaPosition: 'left',
			},
			innerBlocks: [
				{
					name: 'core/paragraph',
					attributes: {
						content: 'The wren<br>Earns his living<br>Noiselessly.',
					},
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: '— Kobayashi Issa (一茶)',
					},
				},
			],
		},
	],
} );

registerBlockStory( 'core/media-text', {
	name: 'Media on Right',
	blocks: [
		{
			name: 'core/media-text',
			attributes: {
				mediaType: 'image',
				mediaUrl: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
				mediaPosition: 'right',
			},
			innerBlocks: [
				{
					name: 'core/paragraph',
					attributes: {
						content: 'The wren<br>Earns his living<br>Noiselessly.',
					},
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: '— Kobayashi Issa (一茶)',
					},
				},
			],
		},
	],
} );

registerBlockStory( 'core/media-text', {
	name: 'Media on Left with imageFill',
	blocks: [
		{
			name: 'core/media-text',
			attributes: {
				mediaType: 'image',
				mediaUrl: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
				mediaPosition: 'left',
				imageFill: true,
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						content: 'The wren',
						level: 4,
					},
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: 'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam.',
					},
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: 'Vestibulum at eros. Aenean eu leo mmattis dapibus quam.',
					},
				},
			],
		},
	],
} );

registerBlockStory( 'core/media-text', {
	name: 'Media on Right with imageFill',
	blocks: [
		{
			name: 'core/media-text',
			attributes: {
				mediaType: 'image',
				mediaUrl: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
				mediaPosition: 'right',
				imageFill: true,
			},
			innerBlocks: [
				{
					name: 'core/heading',
					attributes: {
						content: 'The wren',
						level: 4,
					},
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: 'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam.',
					},
				},
				{
					name: 'core/paragraph',
					attributes: {
						content: 'Vestibulum at eros. Aenean eu leo mmattis dapibus quam.',
					},
				},
			],
		},
	],
} );

registerBlockStory( 'core/gallery', {
	name: 'Two Columns, Three Images',
	blocks: [
		{
			name: 'core/gallery',
			attributes: {
				columns: 2,
				images: [
					{
						url: 'https://s.w.org/images/core/5.3/Glacial_lakes%2C_Bhutan.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
					},
				],
			},
		},
	],
} );

registerBlockStory( 'core/gallery', {
	name: 'Three Columns, Three Images',
	blocks: [
		{
			name: 'core/gallery',
			attributes: {
				columns: 3,
				images: [
					{
						url: 'https://s.w.org/images/core/5.3/Glacial_lakes%2C_Bhutan.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
					},
				],
			},
		},
	],
} );

registerBlockStory( 'core/gallery', {
	name: 'Four Columns, Four Images',
	blocks: [
		{
			name: 'core/gallery',
			attributes: {
				columns: 4,
				images: [
					{
						url: 'https://s.w.org/images/core/5.3/Glacial_lakes%2C_Bhutan.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
					},
				],
			},
		},
	],
} );

registerBlockStory( 'core/gallery', {
	name: 'Four Columns, Six Images',
	blocks: [
		{
			name: 'core/gallery',
			attributes: {
				columns: 4,
				images: [
					{
						url: 'https://s.w.org/images/core/5.3/Glacial_lakes%2C_Bhutan.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
					},
					{
						url: 'https://s.w.org/images/core/5.3/Glacial_lakes,_Bhutan.jpg',
					},
				],
			},
		},
	],
} );
