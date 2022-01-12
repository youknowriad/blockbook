// Export WordPress globals
import * as data from '@wordpress/data';
import * as hooks from '@wordpress/hooks';
import * as blocks from '@wordpress/blocks';
import * as i18n from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';
import * as element from '@wordpress/element';
import * as blockEditor from '@wordpress/block-editor';
import * as components from '@wordpress/components';
import * as blob from '@wordpress/blob';

window.wp = {
	data,
	element,
	hooks,
	blocks,
	domReady,
	i18n,
	blockEditor,
	components,
	blob,
};
