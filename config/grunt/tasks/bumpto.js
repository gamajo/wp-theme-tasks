// Bump the version to the specified value; e.g., "grunt bumpto:patch"
// Credit to The Theme Foundry's Make theme.
module.exports = function( grunt ) {
	'use strict';

	grunt.registerTask( 'bumpto', function( releaseType ) {
		if ( 'minor' !== releaseType && 'major' !== releaseType && 'patch' !== releaseType ) {
			grunt.fail.fatal( 'Please specify the bump type (e.g., "grunt bumpto:patch")' );
		} else {
			grunt.task.run( 'bump-only:' + releaseType );

			// Update the version numbers
			grunt.task.run( 'replace:release' );
		}
	});
};
