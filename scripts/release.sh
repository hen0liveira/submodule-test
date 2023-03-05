#!/bin/sh
yarn rollup
cp package.json release/package.json
cp README.MD release/README.MD
yes | cp -rf dist/ release/dist/
cd release
git add .
git commit -m 'update'
git push