import {
	registerBlockStory,
} from 'blockbook-api';

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
