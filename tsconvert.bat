set inputDir=./output
set outputDir=./ts
for /r %%i in (%inputDir%/*.json) do ( npx openapi-typescript %inputDir%/%%~nxi -o %outputDir%/%%~ni.ts )
