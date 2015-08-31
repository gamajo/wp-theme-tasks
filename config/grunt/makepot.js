// https://github.com/blazersix/grunt-wp-i18n
/*global module*/
module.exports = {
	theme: {
		options: {
			cwd: '<%= paths.theme %>',
			domainPath: '<%= paths.languages %>',
			potHeaders: {
				poedit: true,
				'Report-Msgid-Bugs-To': '<%= pkg.bugs.url %>'
			},
			type: 'wp-theme'
		}
	}
};
