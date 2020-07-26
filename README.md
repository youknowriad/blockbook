# BlockBook

> ✨ Build and Share WordPress Blocks in Isolation.

BlockBook is a development environment for WordPress/Gutenberg blocks.
It allows you to browse a block library, view the properties of each block, and develop and view the block's output in isolation.

It runs outside of your plugin/theme and outside of WordPress or any Gutenberg environment. This allows you to develop block in isolation, which can improve component reuse, testability, and development speed.

Here is an example featuring the main WordPress Core Blocks: <https://youknowriad.github.io/blockbook/>

## Features

-   Discover and showcase your blocks, attributes, previews and markup.
-   Support static blocks.
-   Test blocks in different themes.
-   Hot/Live Reloading.
-   Generate a static website.

## 🚀 Getting Started

First install blockbook:

```sh
cd my-blocks-plugin
npm install blockbook-cli --save-dev
```

Once installed, add the two following scripts to the `scripts` section of your `package.json`

```json
{
	"scripts": {
		"blockbook:start": "blockbook start",
		"blockbook:build": "blockbook build"
	}
}
```

The last step is to load your blocks and register them in your BlockBook. To do so, create an `index.js` file inside a `.blockbook` folder at the root of your project.

This file represents the entry point of your BlockBook config. You can use it to register block types in your BlockBook or provide alternative themes.

## Registering Block Types

```js
// .blockbook/index.js

// It's important to import the JS code that registers your block in the @wordpress/blocks package
import './my-block-file.js';

// You should also import the stylesheets (editor and style) of your blocks.
import './my-block-styles.css';

// Once your blocks are loaded, make sure to tell BlockBook to add them to the menu.
import { registerBlockType } from 'blockbook-api';

registerBlockType( 'myplugin/myblock-name' );
```

And your block file (the same one that is loaded in your WordPress plugin) should look something like that:

```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'myplugin/myblock-name', blockSettings );
```

You can check the `example` folder in this repository to see a working BlockBook.

## Registering Themes

BlockBook also allows you to test your blocks with several theme editor styles, or if you're a theme developper, build your editor theme styles in isolation and test theme quickly on different blocks.

To do so, you can register your theme like so:

```js
// .blockbook/index.js
import myThemeStyle from '!!raw-loader!./path-to-my-theme-editor-styles.css';
import { registerTheme } from 'blockbook-api';

registerTheme( {
	name: 'my-theme-name',
	title: 'My Theme',
	editorStyles: myThemeStyle,
} );
```

## Registering Block Stories

While developing blocks, you want to be able to see different variations of the same block at the same to ensure the changes you're making are correct no matter the block attributes. To do so you can register **Block Stories** like so:

```js
// .blockbook/index.js
import { registerBlockStory } from 'blockbook-api';
registerBlockStory( 'core/buttons', {
	name: 'Two Buttons', // Name of the story
	blocks: [
		// A blocks array, each block has a name, a set of attributes and potentially inner blocks
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
```

## Custom Build Setup

By default, BlockBook works well with projects relying on the default wp-scripts setup. That said, if you have your own custom setup for JavaScript and Styles, it is possible to use BlockBook by overriding the default `webpack` config. To do so, add a `webpack.config.js` in the `.blockbook` folder that looks like that:

```js
// .blockbook/webpack.config.js

module.exports = ( defaultWebpackConfig ) => {
   // Here you can apply modifications to the default config `defaultWebpackConfig`

   return defaultWebpackConfig;
}
```

## Frequent Questions

**Can I use the WordPress globals in my block code?**

Since BlockBook is an isolated environment, by default, it assumes that you're consuming code using  `import` like suggested by the `wp-scripts` default setup. So your block code should be something like:

```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( myBlockName, myBlockSettings );
```

but we noticed that a lot of plugins use the WordPress globals directly without build step, more like that:

```js
wp.blocks.registerBlockType( myBlockName, myBlockSettings );
```

In order to support the various ways, developers can write their block plugins, some of these globals are made available in BlockBook as well. For the moment, the following variables are available:

```
wp.data
wp.hooks
wp.blocks
wp.domReady
```

If your block plugin relies on other variables not available at the moment, please do open an issue on the repository to ask for inclusion.

## Contributing

We welcome contributions to BlockBook! We have a lot of ideas on the roadmap where you could help, check the repository issues for more details.

📥 Pull requests and 🌟 Stars are always welcome.
