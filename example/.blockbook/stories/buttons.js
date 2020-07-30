import {
	registerBlockStory,
} from 'blockbook-api';

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
