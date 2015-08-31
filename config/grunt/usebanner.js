// https://github.com/mattstyles/grunt-banner
/*global module*/
module.exports = {
	options: {
		position: 'top',
		linebreak: true
	},
	style: {
		options: {
			banner: '<%= styleBanner %>'
		},
		files: {
			src: [
				'<%= paths.tmp %>style*.css'
			]
		}

	}
};
