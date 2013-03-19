module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jasmine : {
      src : 'src/**/*.js',
      options : {
        verbose: true,
        specs: 'spec/**/*Spec.js',
        helpers: 'spec/**/*Helper.js',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: ''
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('test', ['jasmine']);

};
