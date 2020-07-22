import { registerBlockType, registerTheme } from 'blockbook-api';

import twentyNineteenStyle from "!!raw-loader!./themes/twenty-nineteen.css";
import twentyTwentyStyle from "!!raw-loader!./themes/twenty-twenty.css";

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
registerTheme({
	name: 'twenty-nineteen',
	title: 'TwentyNineteen',
	editorStyles: twentyNineteenStyle
})
registerTheme({
	name: 'twenty-twenty',
	title: 'TwentyTwenty',
	editorStyles: twentyTwentyStyle
})