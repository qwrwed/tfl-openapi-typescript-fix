const
  glob = require( 'glob' ),
  path = require( 'path' ),
  jsonfile = require('jsonfile')

const inputDir = "./input";
const outputDir = "./output";

// https://stackoverflow.com/a/28976201
glob.sync( `${inputDir}/**/*.json` ).forEach( function( inputFilePath ) {
  const fileName = inputFilePath.split("/").at(-1);
  const outputFilePath = `${outputDir}/${fileName}`;
  const f = require(inputFilePath);
  console.log(`writing`, outputFilePath)
  jsonfile.writeFile(outputFilePath, f, { spaces: 4 }, function (err) {
    if (err) console.error(err)
  })
});