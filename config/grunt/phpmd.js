// https://github.com/alappe/grunt-phpmd
/*global module*/
module.exports = {
	options: {
		reportFormat: 'text',
		reportFile: '<%= paths.logs %>phpmd.log',
		strict: true,
		rulesets: 'phpmd.xml'
	},
	theme: {
		dir: '<%= paths.theme %>'
	}
};
