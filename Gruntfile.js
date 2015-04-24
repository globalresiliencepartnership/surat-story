module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    // https://github.com/gruntjs/grunt-contrib-clean
    clean : ['app/assets/styles/*', '!app/assets/**/.gitkeep', 'app/assets/scripts/*'],

    // https://github.com/gruntjs/grunt-contrib-compass
    compass : {
      // Default options.
      options : {
          sassDir : 'source_assets/styles',
          cssDir : 'app/assets/styles',
          raw : 'require "sass-css-importer";'
      },

      dev : {
        options : {
          environment: 'development',
          outputStyle: 'expanded',
          debugInfo : true
        }
      },
      prod : {
        options : {
          environment: 'production',
          outputStyle: 'compressed',
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-jshint
    jshint: {
      // Default options.
      options : {
        unused : true
      },

      dev : {
        options : {
          force : true
        },
        src : ['source_assets/scripts/**.js']
      },

      prod: ['source_assets/scripts/**.js']
    },

    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      options: {
        sourceMap: true
      },
      deps: {
        options: {
          mangle: false,
          sourceMap: false,
          compress: false,
        },
        files: {
          './app/assets/scripts/deps.min.js': [
            'source_assets/bower_components/jquery/dist/jquery.min.js',
            'source_assets/bower_components/underscore/underscore-min.js',
            'source_assets/bower_components/async/lib/async.js',
            'source_assets/bower_components/backbone/backbone.js',
            'source_assets/bower_components/leaflet.markercluster/dist/leaflet.markercluster.js',
            'source_assets/bower_components/turf/turf.min.js',
            'source_assets/bower_components/parse/index.js',
          ]
        },
      },
      main: {
        files: {
          './app/assets/scripts/main.min.js': [
            'source_assets/scripts/**/*.js',
          ]
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-copy
    copy: {
        main: {
          expand: true,
          flatten: true,
          src: 'source_assets/styles/images/*', 
          dest: 'app/assets/styles/images/'
        },
    },
    // https://github.com/gruntjs/grunt-contrib-jst
    jst: {
      compile: {
        options: {
          processName: function(filepath) {
            return filepath.replace('source_assets/scripts/templates/', '');
          }
        },
        files: {
          "app/assets/scripts/templates.js": ["source_assets/scripts/templates/**/*.ejs"]
        }
      }
    },

    // https://github.com/joeytrapp/grunt-focus
    focus: {
      main: {
        include: ['css', 'js', 'templates']
      }
    },

    // https://npmjs.org/package/grunt-contrib-watch
    watch : {
      css: {
        files: ['source_assets/styles/**/*.scss'],
        tasks: ['css'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ['source_assets/scripts/**/*.js'],
        tasks: ['js'],
        options: {
          livereload: true,
        },
      },
      templates: {
        files: ['source_assets/scripts/templates/**/*.ejs', 'app/*.html'],
        tasks: ['templates'],
        options: {
          livereload: true,
        },
      }
    },

    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      options: {
        port: 3000,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0',
        base: 'app'
      },

      livereload: {
        options: {
          open: true,
        }
      },

      server: {
        options: {
          open: true,
          livereload: false,
          keepalive: true
        }
      }
    }

  });

  /////////////////////////////////////
  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-focus');
  grunt.loadNpmTasks('grunt-contrib-jst');

  /////////////////////////////////////
  // Register tasks.

  grunt.registerTask('css', ['compass:dev']);
  grunt.registerTask('js', ['jshint:dev', 'uglify:main']);
  grunt.registerTask('templates', ['jst']);
  // Aggregate tasks.
  grunt.registerTask('build', ['css', 'uglify:deps', 'js', 'copy', 'templates']);
  grunt.registerTask('serve', ['connect:server']);
  // Default task with watch.
  grunt.registerTask('default', ['build', 'connect:livereload', 'focus:main']);
  // Prod task.
  grunt.registerTask('prod', ['clean', 'compass:prod', 'jshint:prod', 'uglify:deps', 'uglify:main', 'templates']);

};

