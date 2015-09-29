// https://github.com/csscomb/grunt-csscomb
/*global module*/
module.exports = {
	options: {
		//config: '/path/to/config.json'
	},
	style: {
		files: [{
			expand: true,
			cwd: '',
			src: ['*.css'],
			dest: ''
			//ext: '.resorted.css'
		}]
	}
};
