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
	 	compass: {
	 		dist: {
	 			options: {
	 				sassDir: 'development/scss/',
	 				cssDir: 'development/css/',
	 			},
	 		},
	 	},
	 	concat_css: {
    		all: {
      			src: ['development/css/font.css', 'development/css/layout.css', 'development/css/blocks/*.css'],
      			dest: 'www/static/css/style.css',
    		},
  		},
	 	concat: {
	 		options: {
	 			separator: ';',
	 		},
	 		app: {
	 			src: ['development/js/app/app.js', 'development/js/app/models/*.js', 'development/js/app/collections/*.js', 'development/js/app/views/**/*.js', 'development/js/app/router.js'],
	 			dest: 'www/static/js/app.js',
	 		},
	 		lib: {
	 			src: 'development/js/lib/*.js',
	 			dest: 'www/static/js/lib.js',
	 		},
	 	},
  		clean: {
  			css: ['www/static/css', 'development/css'],
  			js: ['www/static/js'],
  		},
  		watch: {
  			options: {
  				livereload: true,
  			},
  			scripts: {
  				files: ['development/js/app/**/*.js', 'development/js/lib/*.js', 'developement/js/*.js'],
  				tasks: 'update-js',
  			},
  			css: {
  				files: ['development/scss/**/*.scss'],
  				tasks: 'update-css',
  			},
  			templates: {
  				files: 'index.html',
  			},
  		},
	});

	/** Load npm tasks from node_modules **/

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-concat-css');

	/** Grunt tasks **/

	grunt.registerTask('update-js', ['clean:js', 'concat:app', 'concat:lib', 'uglify:app', 'uglify:lib' ]);
	grunt.registerTask('update-css', ['clean:css', 'compass', 'concat_css']);

	grunt.registerTask('default', ['update-js', 'update-css']);
	grunt.registerTask('development', ['update-js', 'update-css']);
};

// Don't cross this line ----------------------------------