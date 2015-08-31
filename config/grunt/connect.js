// https://github.com/gruntjs/grunt-contrib-connect
/*global module*/
module.exports = {
	styleguide: {
		options: {
			livereload: 1337,
			port: 9001,
			base: './',
			open: {
				target: 'http://localhost:9001/styleguide/'
			}
		}
	}
};
