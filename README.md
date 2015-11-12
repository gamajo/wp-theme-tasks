# Gamajo Tech WordPress Theme Tasks

Grunt package that holds configuration options and automated tasks configurations for Gamajo Tech's WordPress Themes.

Built upon the work done by Brady Vercher at [Cedaro WordPress Theme Configuration](https://github.com/cedaro/cedaro-wp-theme-config) and Rob Neu at [Flagship WordPress Theme Config](https://github.com/FlagshipWP/flagship-wp-theme-config) and [WP Site Care WordPress Theme Config](https://github.com/wpsitecare/sitecare-theme-config).

## NPM 3 Required

This package requires NPM 3 to install. NPM 3 is (was?) still currently in beta, so to install, use:

```
$ npm install -g npm@3.0-latest
```

When it's out of beta then you should update to the latest version:

```
$ npm update npm -g
```

NPM 3 doesn't support peerDependencies, but does install dependencies in a flattened model.

## Checks

While this package provides Grunt configurations for themes, it can also self-check those configurations and the config files for this package.

* Run jsonlint, jsvalidate, jshint and jscs on this package's config files.

    ```sh
    $ grunt self
    ```

* Run jsvalidate, jshint and jscs on the theme config and task files.

    ```sh
    $ grunt themeconfigs
    ```

* Run both of the above.
    ```sh
    $ grunt
    ```

## Theme `package.json`

A typical theme `package.json` file may look like:

```js
{
  "name": "gamajo",
  "capitalname": "Gamajo",
  "version": "1.0.0",
  "private": true,
  "theme": {
    "name": "Gamajo",
    "uri": "https://gamajo.com/",
    "description": "Gamajo, Genesis Framework child theme for gamajo.com.",
    "author": "Gary Jones, Gamajo Tech",
    "authoruri": "https://gamajo.com",
    "tags": "",
    "license": "GPL-2.0+",
    "licenseuri": "http://www.gnu.org/licenses/gpl-2.0.html",
    "template": "genesis",
    "textdomain": "gamajo",
    "domainpath": "/languages"
  },
  "devDependencies": {
    "load-cedaro-grunt-config": "cedaro/load-cedaro-grunt-config#develop",
    "wp-theme-tasks": "gamajo/wp-theme-tasks#master"
  }
}
```

Note the `devDependencies` - one dependency that loads Grunt configs, and one dependency that includes *this* Grunt config.

## Theme `Gruntfile.js`

A typical `Gruntfile.js` should look something like:

```js
/*jshint require,node:true */
/*global module*/
module.exports = function( grunt ) {
	'use strict';

	var config = require( 'wp-theme-tasks' );
	require( 'load-cedaro-grunt-config' )( grunt, config ).init();
};
```

### Overrides

You can override the default configuration of wp-theme-tasks, to customise it for your own theme. Your `Gruntfile.js` might look something like:

```js
/*jshint require,node:true */
/*global module*/
module.exports = function( grunt ) {
	'use strict';

	var config = require( 'wp-theme-tasks' );

	// Merge in extra settings.
	config.settings({
		paths: {
			foo: 'bar'
		},
		files: {
			'yaml': '**/*.yml'
		}
	});

	// Merge in task map settings for additional grunt packages.
	config.taskMap({
		sometask: 'grunt-differenttask'
	});

	require( 'load-cedaro-grunt-config' )( grunt, config ).init();
};

```

## Stability

Since this is still a work in progress, consider it 0.something, and therefore not stable.
