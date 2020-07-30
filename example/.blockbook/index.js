import {
	registerBlockType,
	registerTheme,
	registerBlockStory,
} from 'blockbook-api';

import twentyNineteenStyle from '!!raw-loader!./themes/twenty-nineteen.css';
import twentyTwentyStyle from '!!raw-loader!./themes/twenty-twenty.css';

// Register BlockStories
import './stories/heading';
import './stories/buttons';
import './stories/media-text';
import './stories/gallery';
import './stories/cover';

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
