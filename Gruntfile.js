/*jshint node:true */
/*global module,__dirname */

module.exports = function( grunt ) {
	'use strict';

	var path = require( 'path' );

	grunt.initConfig({
		jsonlint: {
			self: {
				src: [
					'.jscsrc',
					'.jshintrc',
					'package.json'
				]
			}
		},

		jsvalidate: {
			options: {
				verbose: false
			},
			self: {
				files: {
					src: [
						'Gruntfile.js',
						'index.js'
					]
				}
			},
			themeconfigs: {
				files: {
					src: [
						'config/**/*.js'
					]
				}
			}
		},

		jshint: {
			options: {
				jshintrc: path.join( __dirname, '.jshintrc' )
			},
			self: [
				'Gruntfile.js',
				'index.js'
			],
			themeconfigs: [
				'config/**/*.js'
			]
		},

		jscs: {
			options: {
				config: path.join( __dirname, '.jscsrc' )
			},
			self: {
				files: {
					src: [
						'Gruntfile.js',
						'index.js'
					]
				}
			},
			themeconfigs: {
				files: {
					src: [
						'config/**/*.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-jsvalidate' );
	grunt.loadNpmTasks( 'grunt-jscs' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );

	grunt.registerTask( 'default', [ 'self', 'themeconfigs' ] );
	grunt.registerTask( 'self', [ 'jsonlint:self', 'jsvalidate:self', 'jshint:self', 'jscs:self' ] );
	grunt.registerTask( 'themeconfigs', [ 'jsvalidate:themeconfigs', 'jshint:themeconfigs', 'jscs:themeconfigs' ] );
};
