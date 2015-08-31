// https://github.com/nDmitry/grunt-postcss
/*global module*/
var autoprefixer = require( 'autoprefixer-core' );

module.exports = {
	options: {
		processors: [
			autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'Firefox ESR',
					'Opera >= 12.1',
					'Explorer >= 9'
				]
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
