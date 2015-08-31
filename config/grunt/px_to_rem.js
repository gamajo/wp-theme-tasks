// https://github.com/walbo/grunt-px-to-rem
/*global module*/
module.exports = {
	options: {
		base: 18//,
		// fallback: true,
		// fallback_existing_rem: true
	},
	files: {
		'tmp/style-fluff.css': ['<%= paths.tmp %>style.css']
	}
};
