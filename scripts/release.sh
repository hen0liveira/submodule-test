#!/bin/sh
yarn rollup
cp package.json release/package.json
cp README.MD release/README.MD
yes | cp -rf build/ release/build/
cd release
git add .
git commit -m 'update'
git push