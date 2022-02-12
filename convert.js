var glob = require( 'glob' )
  , path = require( 'path' );

glob.sync( './src/**/*.json' ).forEach( function( file ) {
  var f = require(file);
  console.log(file, Object.keys(f))
});