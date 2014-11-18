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
	 			src: 'www/static/js/app.js',
	 			dest: 'www/static/js/app.min.js'
	 		},
	 		lib: {
	 			src: 'www/static/js/lib.js',
	 			dest: 'www/static/js/lib.min.js',
	 		}
	 	},
	 	concat: {
	 		options: {
	 			separator: ';',
	 		},
	 		app: {
	 			src: ['development/js/index.js', 'development/js/app/app.js', 'development/js/app/models/*.js', 'development/js/app/collections/*.js', 'development/js/app/views/*.js', 'development/js/app/router.js'],
	 			dest: 'www/static/js/app.js',
	 		},
	 		lib: {
	 			src: 'development/js/lib/*.js',
	 			dest: 'www/static/js/lib.js',
	 		},
	 	},
  		watch: {
  			options: {
  				livereload: true,
  			},
  			scripts: {
  				files: ['development/js/app/**/*.js', 'development/js/lib/*.js'],
  				tasks: 'update-js',
  			},
  			templates: {
  				files: 'index.html',
  			},
  		},
  		clean: {
  			js: ['www/static/js'],
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