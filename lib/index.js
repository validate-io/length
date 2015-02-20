/**
*
*	VALIDATE: length
*
*
*	DESCRIPTION:
*		- Validates if a value is a specific length.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' ),
	isArray = require( 'validate.io-array' ),
	isString = require( 'validate.io-string' );

// HASLENGTH //

/**
* FUNCTION: hasLength( value, length|lower[, upper] )
*	Validates if a value is of a specific length or within a specified interval.
*
* @param {String|Array} value - value to be validated
* @param {Number} length|lower - either a single length or a lower bound length
* @param {Number} [upper] - an upper bound length
* @returns {Boolean} boolean indicating whether value is a specified length or within a specified interval
*/
function hasLength( value, lower, upper ) {
	if ( !isArray( value ) && !isString( value ) && typeof value !== 'function' ) {
		return false;
	}
	if ( !isInteger( lower ) ) {
		throw new TypeError( 'hasLength()::invalid input argument. Second argument must be an integer. Value: `' + lower + '`.' );
	}
	if ( lower < 0 ) {
		throw new RangeError( 'hasLength()::invalid input argument. Second argument must be greater than or equal to 0. Value: `' + lower + '`.' );
	}
	if ( arguments.length < 3 ) {
		return ( value.length === lower );
	}
	if ( !isInteger( upper ) ) {
		throw new TypeError( 'hasLength()::invalid input argument. Upper bound must be an integer. Value: `' + upper + '`.' );
	}
	if ( upper < lower ) {
		throw new RangeError( 'hasLength()::invalid input argument. Upper bound must be greater than or equal to lower bound. Value: `' + upper + '`.' );
	}
	return ( lower <= value.length && value.length <= upper );
} // end FUNCTION hasLength()


// EXPORTS //

module.exports = hasLength;
