// https://github.com/gruntjs/grunt-contrib-cssmin
/*global module*/
module.exports = {
	options: {
		report: 'gzip',
		sourceMap: false
	},
	style: {
		expand: true,
		cwd: '<%= paths.tmp %>',
		src: [
			'style*.css',
			'!style*.min.css'
		],
		dest: '<%= paths.tmp %>',
		ext: '.min.css',
		extDot: 'last'
	}
};
