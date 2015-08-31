// https://github.com/gruntjs/grunt-contrib-watch
/*global module*/
module.exports = {
	options: {
		livereload: true
	},
	grunt: {
		options: {
			reload: true
		},
		files: [
			'<%= files.grunt %>',
			'<%= files.config %>'
		],
		tasks: [
			'jshint:grunt',
			'jsvalidate:grunt',
			'jscs:grunt'
		]
	},
	php: {
		files: [
			'<%= files.php %>'
		],
		tasks: [
			'phplint',
			'phpcs'
		]
	},
	js: {
		files: [
			'<%= files.js %>'
		],
		tasks: [
			'build:js',
			'jshint:assets',
			'jsvalidate:assets',
			'jscs:assets'
		]
	},
	scss: {
		files: [
			'<%= files.scss %>'
		],
		tasks: [
			'build:css',
			'hologram',
			'scsslint'
		]
	}
};
