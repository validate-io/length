/**
*
*	VALIDATE: length
*
*
*	DESCRIPTION:
*		- Validates if a value is specific length.
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

(function() {
	'use strict';

	/**
	* FUNCTION: isLength( value, length|lower, upper )
	*	Validates if a value is of a specific length or within a specified interval.
	*
	* @param {String|Array} value - value to be validated
	* @param {Number} length|lower - either a single length or a lower bound length
	* @param {Number} upper - an upper bound length 
	* @returns {Boolean} boolean indicating whether value is a specified length or within a specified interval
	*/
	function isLength( value, lower, upper ) {
		if ( !Array.isArray( value ) && typeof value !== 'string' ) {
			return false;
		}
		if ( arguments.length < 3 ) {
			return ( value.length === lower );
		}
		return ( lower <= value.length && value.length <= upper );
	} // end FUNCTION isLength()


	// EXPORTS //

	module.exports = isLength;

})();