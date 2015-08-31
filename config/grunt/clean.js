// https://github.com/gruntjs/grunt-contrib-clean
/*global module*/
module.exports = {
	dist: {
		src: [
			'<%= paths.dist %>'
		]
	},
	docs: {
		src: [
			'<%= paths.docs %>'
		]
	},
	logs: {
		src: [
			'<%= paths.logs %>'
		]
	},
	tmp: {
		src: [
			'<%= paths.tmp %>'
		]
	},
	js: {
		src: [
			'<%= paths.theme %>js'
		]
	},
	images: {
		src: [
			'<%= paths.theme %>images'
		]
	},
	languages: {
		src: [
			'<%= paths.theme %>languages'
		]
	},
	style: {
		src: [
			'<%= paths.theme %>style*.*'
		]
	},
	tmpstyle: {
		src: [
			'<%= paths.tmp %>style*.*'
		]
	},
	screenshot: {
		src: [
			'<%= paths.theme %>screenshot.png'
		]
	}

};
