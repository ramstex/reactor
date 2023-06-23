if [ -e dist ];then rm -r dist; fi && cross-env webpack --mode=production && cp -r ./dist/. ./production/
