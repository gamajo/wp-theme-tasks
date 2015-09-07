# Gamajo Tech WordPress Theme Tasks

Grunt package that holds configuration options and automated tasks configurations for Gamajo Tech's WordPress Themes.

Built upon the work done by Brady Vercher at [Cedaro WordPress Theme Configuration](https://github.com/cedaro/cedaro-wp-theme-config) and Rob Neu at [Flagship WordPress Theme Config](https://github.com/FlagshipWP/flagship-wp-theme-config) and [WP Site Care WordPress Theme Config](https://github.com/wpsitecare/sitecare-theme-config).

## NPM 3 Required

This package requires NPM 3 to install. NPM 3 is still currently in beta, so to install, use:

```
$ npm install -g npm@3.0-latest
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
