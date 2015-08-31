/* global module,__dirname */
module.exports = function() {
	'use strict';

	var path = require( 'path' ),
		project = {};

	// Paths that the theme should use.
	project.paths = {
		assets:        'assets/',
		authorAssets:  'assets/theme/',
		bower:         'assets/bower/',
		composer:      'assets/composer/',
		config:        'config/',
		grunt:         'config/grunt/',
		tasks:         'config/grunt/tasks/',
		dist:          'dist/',
		docs:          'docs/',
		languages:     'languages/',
		sass:          'assets/theme/sass/',
		logs:          'logs/',
		reports:       'reports/',
		tmp:           'tmp/',
		global: {
			config: path.join( __dirname, 'config/' ),
			grunt:  path.join( __dirname, 'config/grunt/' ),
			tasks:  path.join( __dirname, 'config/grunt/tasks/' )
		}
	};

	project.taskMap = {
		addtextdomain: 'grunt-wp-i18n',
		makepot:       'grunt-wp-i18n',
		replace:       'grunt-text-replace',
		scsslint:      'grunt-scss-lint',
		usebanner:     'grunt-banner',
		wpcss:         'grunt-wp-css'
	};

	project.files = {
		js:        project.paths.assets + '{,*/}js/*.js',
		scss:      project.paths.authorAssets + 'scss/**/*.scss',
		config:    project.paths.config + '**/*.js',
		php: [
			'**/*.php',
			'!.git/**',
			'!.sass-cache/**',
			'!assets/**',
			'!css/**',
			'!dist/**',
			'!fonts/**',
			'!images/**',
			'!js/**',
			'!languages/**',
			'!logs/**',
			'!bower_components/**',
			'!node_modules/**',
			'!tmp/**'
		],
		changelog: 'CHANGELOG.md'
	};

	return project;
};
