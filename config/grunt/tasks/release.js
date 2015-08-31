// Top level function to build a new release.
// Credit to The Theme Foundry's Make theme.
module.exports = function( grunt ) {
	'use strict';

	grunt.registerTask( 'release', function( releaseType ) {
		if ( 'minor' !== releaseType && 'major' !== releaseType && 'patch' !== releaseType ) {
			grunt.fail.fatal( 'Please specify the release type (e.g., "grunt release:patch")' );
		} else {
			// Check to make sure the log exists
			grunt.task.run( 'log:' + releaseType );

			// Bump the version numbers
			// grunt.task.run( 'bumpto:' + releaseType );

			// Build everything
			grunt.task.run( 'build' );

			// Zip it up
			grunt.task.run( 'package' );
		}
	});
};
