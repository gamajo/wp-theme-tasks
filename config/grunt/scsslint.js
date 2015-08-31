// https://github.com/ahmednuaman/grunt-scss-lint
/*global module*/
module.exports = {
	options: {
		config: '.scss-lint.yml',
		reporterOutput: null
	},
	assets: [
		'<%= paths.authorAssets %>scss/**/*.scss'
	]
};
