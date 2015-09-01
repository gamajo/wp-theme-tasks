// https://github.com/outaTiME/grunt-replace
/*global module*/
module.exports = {
	stylecomments: {
		options: {
			patterns: [
				{
					// Change normalize.css === comment headings to ---
					match: /==/g,
					replacement: '--'
				}
			]
		},
		files: [
			{
				expand: true,
				src: [
					'<%= paths.tmp %>style.css'
				]
			}
		]
	},
	release: {
		options: {
			patterns: [{
				match: 'release',
				replacement: '<%= package.version %>'
			}]
		},
		files: [{
			expand: true,
			src: [
				'<%= paths.theme %>**/*'
			]
		}]
	},
	// Useful when forking this project into a new project
	packagename: {
		options: {
			patterns: [
				{
					match: /incipio/g,
					replacement: '<%= package.name %>'
				},
				{
					match: /Incipio/g,
					replacement: '<%= package.capitalname %>'
				}
			]
		},
		files: [
			{
				expand: true,
				src: [
					'**',
					'.*',
					'!<%= paths.bower %>**/*',
					'!<%= paths.composer %>**/*',
					'!**/*.{png,ico,jpg,gif}',
					'!node_modules/**',
					'!.sass-cache/**',
					'!dist/**',
					'!logs/**',
					'!tmp/**',
					'!*.sublime*',
					'!.DS_Store'
				]
			}
		]
	}
};
