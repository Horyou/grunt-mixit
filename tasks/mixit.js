/*
 * grunt-mixit
 * https://github.com/stephanebachelier/grunt-mixit.git
 *
 * Copyright (c) 2014 Stéphane Bachelier
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mixit', 'Mix data files into one', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      indent: 0
    });

    var mixit = require('mixit');
    var content = {};

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var fileContent = grunt.file.readJSON(filepath);
        content = mixit(content, fileContent);
      });

      // Write the destination file.
      grunt.file.write(file.dest, JSON.stringify(content, null, options.indent));

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });

  });

};
