module.exports = function(grunt) {
	/*
	 * Do grunt related things here
	 * Every thing happens inside the wrapper function
	 */

	 /** Project configuration **/

	 grunt.initConfig({
	 	pkg: grunt.file.readJSON('package.json'),
	 	uglify: {
	 		options: {
	 			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	 		},
	 		app: {
	 			src: 'js/app.js',
	 			dest: 'js/app.min.js'
	 		},
	 		lib: {
	 			src: 'js/lib.js',
	 			dest: 'js/lib.min.js',
	 		}
	 	},
	 	concat: {
	 		options: {
	 			separator: ';',
	 		},
	 		app: {
	 			src: ['static/js/app/index.js', 'static/js/app/models/*.js', 'static/js/app/collections/*.js', 'static/js/app/views/*.js', 'static/js/app/router.js'],
	 			dest: 'js/app.js',
	 		},
	 		lib: {
	 			src: 'static/js/lib/*.js',
	 			dest: 'js/lib.js',
	 		},
	 	},
  		watch: {
  			options: {
  				livereload: true,
  			},
  			scripts: {
  				files: ['static/js/app/**/*.js', 'static/js/lib/*.js'],
  				tasks: 'update-js',
  			},
  			templates: {
  				files: 'index.html',
  			},
  		},
  		clean: {
  			js: ['js'],
  		}
	});

	/** Load npm tasks from node_modules **/

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	/** Grunt tasks **/

	grunt.registerTask('update-js', ['clean:js', 'concat:app', 'concat:lib', 'uglify:app', 'uglify:lib' ]);

	grunt.registerTask('default', ['update-js']);
	grunt.registerTask('development', ['update-js']);
};

// Don't cross this line ----------------------------------