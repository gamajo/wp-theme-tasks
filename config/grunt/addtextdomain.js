// https://github.com/blazersix/grunt-wp-i18n
/*global module*/
module.exports = {
	options: {
		// updateDomains: ['incipio'] // Hard-coded by default
		textdomain: '<%= package.theme.textdomain %>'
	},
	php: {
		files: {
			src: [
				'<%= files.php %>'
			]
		}
	}
};
