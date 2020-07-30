import {
	registerBlockStory,
} from 'blockbook-api';

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
