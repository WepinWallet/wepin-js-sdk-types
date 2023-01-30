/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

/**
 * copy ./resources/package.module.json to ./dist/esnext/package.json
 * copy ./resources/package.commonjs.json to ./dist/commonjs/package.json
 */
function copyPackage() {
  fs.copyFileSync(
    './resources/package.module.json',
    './dist/esnext/package.json'
  )
  fs.copyFileSync(
    './resources/package.commonjs.json',
    './dist/commonjs/package.json'
  )
}

copyPackage()
