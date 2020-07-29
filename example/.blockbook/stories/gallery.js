import {
	registerBlockStory,
} from 'blockbook-api';

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
