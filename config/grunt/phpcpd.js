// https://github.com/alappe/grunt-phpcpd
/*global module*/
module.exports = {
	options: {
		ignoreExitCode: true,
		reportFile: '<%= paths.logs %>phpcpd.log',
		exclude: 'includes/vendor',
		quiet: false,
		minTokens: 20
	},
	theme: {
		dir: '<%= paths.theme %>'
	}
};
