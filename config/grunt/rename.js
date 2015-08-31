// https://github.com/jasonlam604/grunt-contrib-rename
/*global module*/
module.exports = {
	normalize: {
		files: [
			{
				src: ['<%= paths.bower %>normalize/normalize.css'],
				dest: '<%= paths.bower %>normalize/_normalize.scss'
			}
		]
	}
};
