module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./javascripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          'sass/main.css': 'sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./javascripts/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass']);
};