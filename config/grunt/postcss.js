// https://github.com/nDmitry/grunt-postcss
/*global module*/
var autoprefixer    = require( 'autoprefixer' ),
	stylelint       = require( 'stylelint' ),
	reporter        = require( 'postcss-reporter' ),
	configWordPress = require( 'stylelint-config-wordpress' );

module.exports = {
	options: {
		processors: [
			stylelint( configWordPress ),
			autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'Firefox ESR',
					'Opera >= 12.1',
					'Explorer >= 9'
				]
			}),
			reporter({
				clearMessages: true
			})
		],
		map: false,
		diff: '<%= paths.logs %>postcss.diff'
	},
	theme: {
		src: '<%= paths.tmp %>style.css',
		dest: '<%= paths.tmp %>style.css'
	}
};
