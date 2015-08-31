// https://github.com/gruntjs/grunt-contrib-copy
/*global module*/
module.exports = {
	css: {
		files: [
			{
				cwd: '<%= paths.tmp %>',
				expand: true,
				flatten: true,
				src: [
					'style*.css'
				],
				dest: '<%= paths.theme %>',
				filter: 'isFile'
			}
		]
	},
	// fonts: {
	// 	files: [
	// 		{
	// 			expand: true,
	// 			flatten: true,
	// 			src: [
	// 				'<%= paths.bower %>{,*/}fonts/*',
	// 				'!<%= paths.bower %>{,*/}fonts/*.otf'
	// 			],
	// 			dest: '<%= paths.theme %>fonts/',
	// 			filter: 'isFile'
	// 		}
	// 	]
	// },
	images: {
		files: [
			{
				cwd: '<%= paths.tmp %>images',
				expand: true,
				flatten: true,
				src: ['*', '!screenshot.png'],
				dest: '<%= paths.theme %>images',
				filter: 'isFile'
			}
		]
	},
	screenshot: {
		files: [
			{
				cwd: '<%= paths.tmp %>images',
				expand: true,
				flatten: true,
				src: ['screenshot.png'],
				dest: '<%= paths.theme %>',
				filter: 'isFile'
			}
		]
	}
};
