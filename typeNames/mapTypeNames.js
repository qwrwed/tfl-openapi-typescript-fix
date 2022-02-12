const
  glob = require( 'glob' ),
  jsonfile = require('jsonfile')

const inputDir = "../input";
const outputFilePath = `./typeNamesMap.json`;

const sortStringifyKeys = function(obj){
  return JSON.stringify(Object.keys(obj).sort())
}

const makeMapFromOrig = function(filePath){
  const map = {};
  const f = require(filePath);
  for (const definitionId in f.definitions){
    const properties = f.definitions[definitionId].properties;
    const k = sortStringifyKeys(properties);
    const v = definitionId;
    map[k] = v;
  }
  return map
}

const origMap = makeMapFromOrig("./swaggerFileOriginal.json");
// console.log(origMap)
const obj = {};
const regex = new RegExp('^Tfl(-[0-9]+)?$');

// https://stackoverflow.com/a/28976201
glob.sync( `${inputDir}/**/*.json` ).forEach( function( inputFilePath ) {
  const fileName = inputFilePath.split("/").at(-1);
  const apiType = fileName.split(".").at(0);
  obj[apiType] = {};
  const f = require(inputFilePath);
  if (f.components.schemas){
    for (const schemaId in f.components.schemas){
      const schema = f.components.schemas[schemaId]
      if (regex.test(schemaId)){
        const origType = origMap[sortStringifyKeys(schema.properties)]
        obj[apiType][schemaId] = origType;
      }
    }
  }
});

// console.log(`saving`, outputFilePath, `(added reqs to ${schemaCount} schemas)`)
jsonfile.writeFile(outputFilePath, obj, { spaces: 4 }, function (err) {
  if (err) console.error(err)
})