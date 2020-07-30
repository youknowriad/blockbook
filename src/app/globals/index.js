// Export WordPress globals
import * as data from '@wordpress/data';
import * as hooks from '@wordpress/hooks';
import * as blocks from '@wordpress/blocks';
import * as i18n from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';

window.wp = {
	data,
	hooks,
	blocks,
	domReady,
	i18n,
};
