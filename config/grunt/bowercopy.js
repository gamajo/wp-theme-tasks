// https://github.com/timmywil/grunt-bowercopy
/*global module*/
module.exports = {
	options: {
		clean: true
	},
	css: {
		options: {
			destPrefix: '<%= paths.bower %>'
		},
		files: {
			bourbon: 'bourbon/app/assets/stylesheets',
			neat: 'neat/app/assets/stylesheets',
			normalize: 'normalize.css/normalize.css'
		}
	},
	js: {
		options: {
			destPrefix: '<%= paths.bower %>'
		},
		files: {
			'fitvids/js': 'fitvids/jquery.fitvids.js',
			'accessible-menu/js': 'accessible-menu/dist'
		}
	},
	styleguide: {
		options: {
			destPrefix: '<%= paths.bower %>'
		},
		files: {
			cortana: 'Cortana'
		}
	}
};
