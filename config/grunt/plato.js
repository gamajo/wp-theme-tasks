//https://github.com/es-analysis/plato
/*global module*/
module.exports = function( grunt ) {
	'use strict';
	return {
		assets: {
			options: {
				jshint: grunt.file.readJSON( '.jshintrc' )
			},
			files: {
				'reports/plato/assets': '<%= paths.authorAssets %>js/{,*/}*.js'
			}
		},
		grunt: {
			options: {
				jshint: grunt.file.readJSON( '.gruntjshintrc' )
			},
			files: {
				'reports/plato/grunt': [
					'<%= files.grunt %>',
					'<%= files.config %>'
				]
			}
		}
	};
};
