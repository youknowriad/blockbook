import { registerCoreBlocks } from '@wordpress/block-library';
import { render, StrictMode } from '@wordpress/element';
import { App } from './components/app';
import './load.js';
import './reset.css';
import './editor-styles';

import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import '@wordpress/block-library/build-style/editor.css';
import '@wordpress/format-library/build-style/style.css';
// Ideally this is imported where used in the block-library package.
import '@wordpress/notices';
registerCoreBlocks();

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.body.querySelector( '#root' )
);
