// https://github.com/MohammadYounes/grunt-rtlcss
/*global module*/
module.exports = {
	options: {
		config: {
			autoRename: false,
			preserveDirectives: true
		},
		saveUnmodified: false
	},
	theme: {
		files: [
			{ // Must be done on tmp file, otherwise RTL rules are removed.
				src: '<%= paths.tmp %>style.css',
				dest: '<%= paths.tmp %>style-rtl.css'
			}
		]
	}
};
