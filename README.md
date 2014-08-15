# grunt-mixit

Merge multiple json files.

It uses the [mixit](https://github.com/stephanebachelier/mixit) microlib.

If you want more power you should use the [json-merge](https://www.npmjs.org/package/json-merge) by [maxogden](https://www.npmjs.org/~maxogden)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mixit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mixit');
```

## The "mixit" task

### Overview
In your project's Gruntfile, add a section named `mixit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mixit: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.indent
Type: `Number`
Default value: `0`

The number of spaces (up to 10) to use to indent the JSON.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  mixit: {
    files: {
      'dist/foo.json': ['src/bar.json', 'src/baz.json'],
    },
    or: {
      src: ['data/en/**/*.json'],
      dest: 'dist/en.json'
    }
  },
})
```

#### Options
By default the generated JSON won't have any extra spaces. It will already be minified. If you want a prettier, say readable output you can use the `indent` option, which is FYI, the third parameter of the `JSON.stringify` method.

See [jimcowart](http://freshbrewedcode.com/jimcowart/2013/01/29/what-you-might-not-know-about-json-stringify/) speaking about this function.

```js
grunt.initConfig({
  mixit: {
    options: {
      indent: 2
    },
    files: {
      src: ['data/en/**/*.json'],
      dest: 'dist/en.json'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Stéphane Bachelier. Licensed under the MIT license.
