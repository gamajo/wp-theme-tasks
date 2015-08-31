// https://github.com/gruntjs/grunt-sass
/*global module*/
module.exports = {
	options: {
		force: true,
		style: 'expanded',
		trace: true,
		lineNumbers: true
	},
	theme: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: '*.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	}
};
