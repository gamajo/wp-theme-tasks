// https://github.com/jscs-dev/grunt-jscs
/*global module*/
module.exports = {
	options: {
		config: '.jscsrc'
	},
	assets: {
		files: {
			src: [
				'<%= paths.authorAssets %>js/{,*/}*.js'
			]
		}
	}
};
