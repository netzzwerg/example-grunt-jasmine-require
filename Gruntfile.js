module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({



    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js',
        template: require('grunt-template-jasmine-requirejs')
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');


  grunt.registerTask('test', ['jasmine']);

};
