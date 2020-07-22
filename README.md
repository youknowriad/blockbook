# BlockBook

> ✨ Build and Share WordPress Blocks in Isolation.

BlockBook is a development environment for WordPress/Gutenberg blocks.
It allows you to browse a block library, view the properties of each block, and develop and view the block's output in isolation.

It runs outside of your plugin/theme and outside of WordPress or any Gutenberg environment. This allows you to develop block in isolation, which can improve component reuse, testability, and development speed.

Here is an example featuring the main WordPress Core Blocks: <https://youknowriad.github.io/blockbook/>

## Features

 - Discover and showcase your blocks, attributes, previews and markup.
 - Support static blocks.
 - Test blocks in different themes.
 - Hot/Live Reloading.
 - Generate a static website.

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
import "./my-block-file.js";

// You should also import the stylesheets (editor and style) of your blocks.
import "./my-block-styles.css";

// Once your blocks are loaded, make sure to tell BlockBook to add them to the menu.
import { registerBlockType } from 'blockbook-api';

registerBlockType( 'myplugin/myblock-name' );
```

And your block file (the same one that is loaded in your WordPress plugin) should look something like that:

```js
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'myplugin/myblock-name', blockSettings );
```

You can check the  `example` folder in this repository to see a working BlockBook.

## Registering Themes

BlockBook also allows you to test your blocks with several theme editor styles, or if you're a theme developper, build your editor theme styles in isolation and test theme quickly on different blocks.

To do so, you can register your theme like so:

```js
// .blockbook/index.js
import myThemeStyle from "!!raw-loader!./path-to-my-theme-editor-styles.css";

// Once your blocks are loaded, make sure to tell BlockBook to add them to the menu.
import { registerTheme } from 'blockbook-api';

registerTheme({
	name: 'my-theme-name',
	title: 'My Theme',
	editorStyles: twentyTwentyStyle
})
```

## Contributing

We welcome contributions to BlockBook! We have a lot of ideas on the roadmap where you could  help, check the repository issues for more details.

📥 Pull requests and 🌟 Stars are always welcome.
