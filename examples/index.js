'use strict';

var hasLength = require( './../lib' );

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
