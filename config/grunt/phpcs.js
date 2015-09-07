// https://github.com/SaschaGalley/grunt-phpcs
/*global module*/
/* Note that if phpcs.xml is present as it should be, the targets here are ignored. */
module.exports = {
	options: {
		// Assumes 'phpcs' is accessible in the global system.
		// If not, set 'bin: /path/to/bin/phpcs'
		// ignoreExitCode: true,
		standard: 'phpcs.xml'
	},
	full: {
		options: {
			reportFile: '<%= paths.logs %>phpcs-full.log'
		},
		src: [
			'<%= paths.theme %>**/*.php'
		]
	}
};
