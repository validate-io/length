Length
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a specific length.


## Installation

``` bash
$ npm install validate.io-length
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var hasLength = require( 'validate.io-length' );
```

#### hasLength( value, length | lower[, upper] )

Validates if a `value` has either a specific `length` or has a `length` between a `lower` bound (inclusive) and an `upper` bound (inclusive).

``` javascript
var value = [ 1, 2, 3 ],
	len = 3,
	lower = 1,
	upper = 7;

var bool = hasLength( value, len );
// returns true

bool = hasLength( value, lower, upper );
// returns true
```


## Notes

This method applies __only__ to `string`, `array`, and `function` value types. For any other types, the method returns `false`.


## Examples

``` javascript
console.log( hasLength( 'beep', 4 ) );
// returns true

console.log( hasLength( 'foo', 2, 10 ) );
// returns true

console.log( hasLength( [1,2,3], 3 ) );
// returns true

console.log( hasLength( [4,5,6], 0, 5 ) );
// returns true

console.log( hasLength( function(a,b,c){}, 3 ) );
// returns true

console.log( hasLength( 'baz', 4 ) );
// returns false

console.log( hasLength( [1,2], 10, 12 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


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
