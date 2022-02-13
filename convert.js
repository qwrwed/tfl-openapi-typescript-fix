const
  glob = require( 'glob' ),
  path = require( 'path' ),
  jsonfile = require('jsonfile')

const verbose = false;
const inputDir = "./input";
const outputDir = "./output";

// https://stackoverflow.com/a/28976201
glob.sync( `${inputDir}/**/*.json` ).forEach( function( inputFilePath ) {
  const fileName = inputFilePath.split("/").at(-1);
  const apiType = fileName.split(".").at(0);
  const outputFilePath = `${outputDir}/${fileName}`;
  const f = require(inputFilePath);
  let schemaCount = 0;
  // console.log("processing", inputFilePath, "...");
  if (f.components.schemas){
    for (const schemaId in f.components.schemas){
      const schema = f.components.schemas[schemaId];
      if ((schema.type === "object") && (schema.properties)){
        const reqs = Object.keys(schema.properties)
        if (verbose) console.log(`adding ${reqs.length} required fields to`, apiType, schemaId);
        schema.required = reqs;
        schemaCount++;
      }
    }
  }

  console.log(`saving`, outputFilePath, `(added reqs to ${schemaCount} schemas)`)
  jsonfile.writeFile(outputFilePath, f, { spaces: 4 }, function (err) {
    if (err) console.error(err)
  })
});

// EXCEPTIONS
// some instances of type StopPoint (aka TfL-11 in StopPoint.json)
// have been observed to not have one or more ofthe following properties:
// [
//   "platformName",
//   "smsCode",
//   "accessibilitySummary",
//   "hubNaptanCode",
//   "fullName",
//   "naptanMode",
//   "url",
//   "childrenUrls",
// ]
