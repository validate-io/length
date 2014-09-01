var isLength = require( './../lib' );

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