// https://github.com/SaschaGalley/grunt-phpcs
/*global module*/
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
	},
	info: {
		options: {
			showSniffCodes: true,
			report: 'info',
			reportFile: '<%= paths.logs %>phpcs-info.log',
			standard: 'Generic,PEAR,Squiz,PSR2,Zend'
		},
		src: [
			'<%= paths.theme %>**/*.php'
		]
	},
	source: {
		options: {
			report: 'source',
			reportFile: '<%= paths.logs %>phpcs-source.log',
			showSniffCodes: true
		},
		src: [
			'<%= paths.theme %>**/*.php'
		]
	}
};
