'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.mixit = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  new_property: function (test) {
    test.expect(2);

    var expected = grunt.file.readJSON('test/expected/new_property');
    var actual = grunt.file.readJSON('tmp/new_property');
    test.equal(actual.foo, expected.foo, 'should have the foo property.');
    test.equal(actual.bar, expected.bar, 'should have the bar property');

    test.done();
  },
  mix_property: function (test) {
    test.expect(3);

    var expected = grunt.file.readJSON('test/expected/mix_property');
    var actual = grunt.file.readJSON('tmp/mix_property');
    test.equal(actual.name.firstname, expected.name.firstname, 'should have the name.firstname property.');
    test.equal(actual.name.lastname, expected.name.lastname, 'should have the name.lastname property.');
    test.equal(actual.name.alias, expected.name.alias, 'should have the name.alias property.');

    test.done();
  }
};
