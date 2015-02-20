/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-length', function tests() {

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-positive integer lower bound', function test() {
		var values = [
			-1,
			true,
			[],
			'5',
			function(){},
			null,
			NaN,
			{},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				validate( [], value, 5 );
			};
		}
	});

	it( 'should throw an error if provided a non-positive integer upper bound', function test() {
		var values = [
			-1,
			true,
			[],
			'5',
			function(){},
			null,
			NaN,
			{},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				validate( [], 0, value );
			};
		}
	});

	it( 'should positively validate', function test() {
		assert.ok( validate( 'ok', 2 ) );
		assert.ok( validate( [1,2], 2 ) );
		assert.ok( validate( function(a,b){}, 2 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			true,
			[],
			[1,2,3],
			'5',
			'536',
			function(){},
			null,
			NaN,
			{'foo':'bar'},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i], 2 ) );
		}
	});

	it( 'should positively validate for a range', function test() {
		assert.ok( validate( 'ok', 1, 3 ) );
		assert.ok( validate( [1,2], 1, 3 ) );
		assert.ok( validate( function(a,b){}, 1, 3 ) );
	});

	it( 'should negatively validate for a range', function test() {
		var values = [
			5,
			true,
			[],
			[1,2,3,4],
			'',
			'5369',
			function(){},
			null,
			NaN,
			{'foo':'bar'},
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i], 1, 3 ) );
		}
	});

});
