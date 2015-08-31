// https://github.com/axisthemes/grunt-potomo
/*global module*/
module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.assets %><%= paths.languages %>',
				src: ['*.po'],
				dest: '<%= paths.theme%><%= paths.languages %>',
				ext: '.mo',
				nonull: true,
				filter: 'isFile'
			}
		]
	}
};
