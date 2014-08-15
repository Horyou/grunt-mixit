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
  },
  no_shadow: function (test) {
    test.expect(2);

    var expected = grunt.file.readJSON('test/expected/no_shadow');
    var actual = grunt.file.readJSON('tmp/no_shadow');
    test.equal(actual.foo, expected.foo, 'should have the same foo property.');
    test.equal(typeof actual.foo, 'string', 'should have the same foo property.');

    test.done();
  },
  indent: function (test) {
    test.expect(1);

    var expected = grunt.file.read('test/expected/new_property');
    var actual = grunt.file.read('tmp/indent');

    // fix issue about editor that may add an extra new line at EOF
    var beforeLast = expected.length - 1;
    var _expected = expected.charAt(beforeLast) === '\n' ? expected.substr(0, beforeLast) : expected;

    // run test
    test.deepEqual(actual, _expected, 'should have the foo property.');

    test.done();
  },
};
