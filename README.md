Length
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is specific length.


## Installation

``` bash
$ npm install validate.io-length
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var isLength = require( 'validate.io-length' );

console.log( isLength( 'beep', 4 ) );
// Returns true

console.log( isLength( 'foo', 2, 10 ) );
// Returns true

console.log( isLength( [1,2,3], 3 ) );
// Returns true

console.log( isLength( [4,5,6], 0, 5 ) );
// Returns true

console.log( isLength( 'baz', 4 ) );
// Returns false

console.log( isLength( [1,2], 10, 12 ) );
// Returns false
```

where 

``` javascript
isLength( value, length );
isLength( value, lower, upper );
```

The arguments are as follows:

* 	`value` is the value to be validated
* 	`length` is a specific length that the `value` must be
* 	`lower` is a lower bound length (inclusive)
* 	`upper` is an upper bound length (inclusive)


## Notes

This method applies __only__ to `string` and `array` value types. For any other types, the method returns `false`.


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-length.svg
[npm-url]: https://npmjs.org/package/validate.io-length

[travis-image]: http://img.shields.io/travis/validate-io/length/master.svg
[travis-url]: https://travis-ci.org/validate-io/length

[coveralls-image]: https://img.shields.io/coveralls/validate-io/length/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/length?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/length.svg
[dependencies-url]: https://david-dm.org/validate-io/length

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/length.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/length

[github-issues-image]: http://img.shields.io/github/issues/validate-io/length.svg
[github-issues-url]: https://github.com/validate-io/length/issues