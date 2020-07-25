// Export WordPress globals
import * as data from '@wordpress/data';
import * as hooks from '@wordpress/hooks';
import * as blocks from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

window.wp = {
	data,
	hooks,
	blocks,
	domReady,
};
