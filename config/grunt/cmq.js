// https://github.com/JohnCashmore/grunt-combine-media-queries
/*global module*/
module.exports = {
	options: {
		log: true
	},
	style: {
		files: {
			'tmp/style.css': '<%= paths.tmp %>style.css'
		}
	}
};
