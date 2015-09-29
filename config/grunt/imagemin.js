// https://github.com/gruntjs/grunt-contrib-imagemin
/*global module*/
module.exports = {
	options: {                       // Target options
		optimizationLevel: 3,
		svgoPlugins: [{ removeViewBox: false }]
		//use: [mozjpeg()]
	},
	files: [{
		expand: true,                  // Enable dynamic expansion
		cwd: 'images/',                // Src matches are relative to this path
		src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
		dest: 'images/'                // Over-write images
	}]
};
