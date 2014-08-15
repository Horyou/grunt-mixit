/*
 * grunt-mixit
 * https://github.com/stephanebachelier/grunt-mixit.git
 *
 * Copyright (c) 2014 Stéphane Bachelier
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    mixit: {
      new_property: {
        options: {
        },
        files: {
          'tmp/new_property': ['test/fixtures/base', 'test/fixtures/add_bar_property']
        }
      },
      mix_property: {
        options: {
        },
        files: {
          'tmp/mix_property': ['test/fixtures/mix_property_base', 'test/fixtures/mix_property_mix']
        }
      },
      no_shadow: {
        options: {
        },
        files: {
          'tmp/no_shadow': ['test/fixtures/no_shadow_base', 'test/fixtures/no_shadow_mix']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mixit', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
