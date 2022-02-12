set inputDir=./output
set outputDir=./ts
for /r %%i in (%inputDir%/*) do ( npx openapi-typescript %inputDir%/%%~nxi -o %outputDir%/%%~ni.ts )